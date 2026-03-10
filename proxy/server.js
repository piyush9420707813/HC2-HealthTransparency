import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

/* =====================================================
   TWILIO CONFIGURATION
===================================================== */

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

/* =====================================================
   HUGGINGFACE MODEL ENDPOINTS
===================================================== */

const SUMMARY_URL =
  "https://router.huggingface.co/hf-inference/models/sshleifer/distilbart-cnn-12-6";

const TRANSLATE_MODELS = {
  Hindi:
    "https://router.huggingface.co/hf-inference/models/Helsinki-NLP/opus-mt-en-hi",
  Marathi:
    "https://router.huggingface.co/hf-inference/models/Helsinki-NLP/opus-mt-en-mr",
  Gujarati:
    "https://router.huggingface.co/hf-inference/models/Helsinki-NLP/opus-mt-en-gu",
};

/* =====================================================
   STEP 1 → SUMMARIZE TEXT
===================================================== */
async function summarizeText(text) {
  const response = await fetch(SUMMARY_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.HF_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputs: text.slice(0, 4000),
      parameters: {
        max_length: 120,
        min_length: 40,
      },
      options: { wait_for_model: true },
    }),
  });

  const data = await response.json();

  if (Array.isArray(data)) {
    return data[0].summary_text;
  }

  throw new Error("Summarization failed");
}

/* =====================================================
   STEP 2 → TRANSLATE SUMMARY
===================================================== */
async function translateText(text, language) {
  const modelURL = TRANSLATE_MODELS[language];
  if (!modelURL) return text;

  const response = await fetch(modelURL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.HF_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputs: text,
      options: { wait_for_model: true },
    }),
  });

  const data = await response.json();

  if (Array.isArray(data)) {
    return data[0].translation_text;
  }

  return text;
}

/* =====================================================
   AI ROUTE
===================================================== */
app.post("/summarize", async (req, res) => {
  try {
    const { text, language = "English" } = req.body;

    if (!text) {
      return res.status(400).json({ error: "No text provided" });
    }

    const summary = await summarizeText(text);

    let finalSummary = summary;
    if (language !== "English") {
      finalSummary = await translateText(summary, language);
    }

    res.json({ summary: finalSummary });

  } catch (err) {
    console.error("❌ AI Proxy Error:", err);
    res.status(500).json({ error: "AI processing failed" });
  }
});

/* =====================================================
   WHATSAPP ROUTE
===================================================== */
app.post("/send-whatsapp", async (req, res) => {
  try {
    const { phone, message } = req.body;

    if (!phone || !message) {
      return res.status(400).json({ error: "Phone or message missing" });
    }

    const response = await twilioClient.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: `whatsapp:+${phone}`,
      body: message,
    });

    res.json({ success: true, sid: response.sid });

  } catch (error) {
    console.error("❌ WhatsApp Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

/* =====================================================
   START SERVER
===================================================== */
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});