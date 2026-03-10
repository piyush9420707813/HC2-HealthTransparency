export const summarizeTextHF = async (text, language = "English") => {
  try {
    const response = await fetch("https://hc2-healthtransparency.onrender.com/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        language,
      }),
    });

    const data = await response.json();
    return data.summary;
  } catch (error) {
    console.error("Summary error:", error);
    return "Unable to generate summary.";
  }
};
