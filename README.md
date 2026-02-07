# 💰 Money Manager – Personal Finance Web Application

Money Manager is a full-stack web application designed to help users manage personal and office finances efficiently. The application enables users to record income and expenses, analyze spending patterns, and view financial summaries through an interactive dashboard.

---

## 🚀 Features

- Dashboard with total income, expenses, and balance
- Add income and expense transactions
- Category-based tracking (Food, Fuel, Medical, Loan, etc.)
- Division-based tracking (Personal / Office)
- Transaction history table
- Visual charts for income vs expense analysis
- Modern and responsive UI using Tailwind CSS
- Cloud-ready full-stack architecture

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- JavaScript
- Recharts

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Deployment
- Frontend: Vercel
- Backend: Render / Railway

## 📂 Project Structure

money-manager/

├── frontend/

│ ├── src/

│ │ ├── components/

│ │ ├── pages/

│ │ ├── App.jsx

│ │ └── index.css

│ └── package.json

│

├── backend/

│ ├── models/

│ ├── routes/

│ ├── server.js

│ └── package.json

│

├── .gitignore

└── README.md


## ⚙️ Environment Variables

### Frontend
VITE_API_URL=<frontend_url>


### Backend
MONGO_URI=mongodb+srv://jayanth422232:Vinay&181104@cluster0.dtmpini.mongodb.net/money-manager?appName=Cluster0
PORT=5000


## ▶️ Run the Project Locally

### Clone the repository
```bash
git clone https://github.com/<your-username>/money-manager.git
cd money-manager

Run Backend
cd backend
npm install
npm start


Run Frontend
cd frontend
npm install
npm run dev

Backend runs on: http://localhost:5000

Frontend runs on: http://localhost:5173



