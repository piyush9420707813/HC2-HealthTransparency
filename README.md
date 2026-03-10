# 🏥 TreatWise – Healthcare Transparency & Decision Intelligence Platform
# Project Name
[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20Website-brightgreen?style=for-the-badge&logo=vercel)](https://hc-2-health-transparency.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/💻%20Source%20Code-GitHub-black?style=for-the-badge&logo=github)](https://github.com/piyush9420707813/HC2-HealthTransparency)

TreatWise is a healthcare transparency platform designed to help patients make informed decisions based on structured, real-world treatment data. Unlike traditional review systems that rely on generic star ratings, TreatWise converts patient feedback into measurable healthcare intelligence such as billing deviation, insurance efficiency, recovery outcomes, and wait times.

---

## 🚀 Problem Statement

Patients in India often make critical healthcare decisions without transparent and structured information. While hospital ratings and reviews exist, they rarely provide insights into:

- Final treatment cost vs estimated cost
- Hidden charges
- Insurance claim approval delays
- Recovery duration
- Treatment outcome success rates

This lack of transparency increases financial risk, medical uncertainty, and decision anxiety for patients and their families.

TreatWise solves this by transforming patient reviews into structured, actionable healthcare intelligence.

---

## 💡 Our Solution

We built a unified digital healthcare transparency ecosystem that enables patients to:

- Search and compare treatment costs  
- Visualize hospitals on an interactive map  
- Estimate real out-of-pocket expenses  
- Check government scheme eligibility  
- Book appointments securely  
- Submit structured reviews  
- Receive Email & WhatsApp notifications  
- Use an AI chatbot for guidance  

---

# 🔥 Key Features

## 🔍 Smart Treatment Search
- Search by disease or treatment
- View hospital-specific pricing
- Compare cost and ratings

---

## 📍 Map-Based Hospital Discovery
- Hospitals displayed as interactive map pins
- Each pin represents a real hospital location
- Click pin to view:
  - Hospital details
  - Treatment pricing
  - Ratings
- Enables location-aware decision making

---

## 💰 Out-of-Pocket Cost Estimator
Final OOP Cost =
Treatment Cost
- Government Scheme Coverage
- Insurance Coverage

Dynamic cost calculation based on eligibility and insurance coverage.

---

## 🧾 Government Scheme Eligibility Checker
Eligibility determined using:
- State
- Annual income
- Ration card type

Automatically adjusts final payable amount.

---

## ⭐ Review & Rating System
- Structured patient feedback
- Persistent review storage
- Avoids hardcoded duplicate reviews
- Builds transparency and trust

---

## 📅 Appointment Booking System
- Book appointments directly
- Role-Based Access Control (RBAC):
  - Patient
  - Hospital
  - Admin
- Booking confirmation notifications

---

## 🔔 Notification System
- Email notifications
- WhatsApp alerts
- Booking confirmations

---

## 🤖 AI Chatbot
- voice support
- Guides patients
- Explains cost breakdown
- Assists in navigation

  ## Multi language support
  - more than 5 language support.
  

---

# 🏗️ System Architecture
Client (React + Tailwind)
        ↓
REST API Layer (Node.js + Express)
        ↓
Authentication Layer (RBAC)
        ↓
Business Logic Layer
   - Cost Estimation Engine
   - Scheme Eligibility Engine
   - Booking Manager
        ↓
Database (Firebase)
        ↓
External Integrations
   - Email API
   - WhatsApp API
   - Insurance APIs (Future)
   - Government Scheme APIs (Future)


---

# 🛠️ Tech Stack

## Frontend
- React.js
- Tailwind CSS
- React Router
- Map API Integration

## Backend
- Node.js
- Express.js

## Database
- Firebase

## Authentication
- Role-Based Access Control (RBAC)

## Integrations
- Email API
- WhatsApp API

---

# 👥 User Roles

## 👤 Patient
- Search treatments
- Compare hospitals
- Estimate cost
- Book appointments
- Write reviews

## 🏥 Hospital
- Manage profile
- View bookings
- Monitor feedback

## 🛡️ Admin
- Manage hospitals
- Moderate reviews
- Maintain scheme data

---

# 📊 Platform Workflow

1. Patient searches treatment  
2. Hospitals displayed in list + map view  
3. Patient selects hospital  
4. Cost estimator calculates final payable amount  
5. Eligibility checker applies scheme benefits  
6. Appointment booking  
7. Notification sent  
8. Review submission  

---

# 🏆 Why This Project Stands Out

- Combines cost transparency + location intelligence  
- Implements financial logic in healthcare decisions  
- Uses RBAC security model  
- Integrates eligibility-based dynamic pricing  
- Provides real-world patient utility  

This is not just a listing platform.  
It is a **Healthcare Financial Decision Intelligence System**.

---

# 📈 Future Scope

- Real-time insurance API integration  
- AI-based hospital recommendation engine  
- Predictive cost modeling using ML  
- Blockchain-based verified reviews  
- EHR integration  
- Mobile application  

---

# ⚙️ Installation & Setup

```bash
# Clone repository
git clone <repository-link>

# Navigate to project folder
cd health-transparency

# Install dependencies
npm install

# Run frontend
npm run dev

# If backend separate
cd backend
npm install
npm start
```
## 📂 Project Structure

```text
Health-Transparency/
│
├── frontend/                  # React Frontend (User Interface)
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── api/               # API calls
│   │   ├── components/        # Reusable UI components
│   │   │   ├── ai/            # AI chatbot components
│   │   │   ├── cards/         # Hospital & treatment cards
│   │   │   ├── filters/       # Search filters
│   │   │   ├── layout/        # Navbar, footer, layouts
│   │   │   ├── shared/        # Shared reusable components
│   │   │   ├── MapView.jsx    # Map-based hospital visualization
│   │   │   └── ReviewPieChart.jsx
│   │   │
│   │   ├── pages/             # Main application pages
│   │   ├── data/              # Mock / structured data
│   │   ├── utils/             # Helper functions (cost calculation, etc.)
│   │   ├── App.jsx            # Main App component
│   │   └── main.jsx           # Entry point
│   │
│   └── package.json
│
├── proxy/                     # Backend / API Layer
│   ├── server.js              # Express server
│   ├── aiProxy.js             # AI request handler
│   └── package.json
│
└── README.md
```

# 👨‍💻 Team

Developed by a team of 4 innovators focused on transforming healthcare transparency and financial accessibility.
---

## 👥 Project Team

- **Sanket Jagtap** – [@itzsanket0](https://github.com/itzsanket0)  
- **Yash date** – [@yash-date](https://github.com/yash-date)  
- **Piyush Gawali** – [@piyush9420707813](https://github.com/piyush9420707813)  
- **Himanshu Sonawane** – [@sHimanshu22](https://github.com/sHimanshu22)  

---

# 📜 License

Developed for academic and innovation purposes.  
