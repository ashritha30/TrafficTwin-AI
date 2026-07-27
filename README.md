# 🚦 TrafficTwin AI

![React](https://img.shields.io/badge/Frontend-React%20%2B%20TypeScript-61DAFB?logo=react)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?logo=fastapi)
![Python](https://img.shields.io/badge/Python-3.11-blue?logo=python)
![Google Gemini](https://img.shields.io/badge/AI-Google%20Gemini-orange)
![Google ADK](https://img.shields.io/badge/Framework-Google%20ADK-red)
![License](https://img.shields.io/badge/License-MIT-green)

> **AI-Powered Smart Traffic Decision Support System using Multi-Agent AI**

TrafficTwin AI is a full-stack AI application that helps traffic authorities analyze traffic conditions, identify congestion hotspots, generate intelligent traffic reports, and assist decision-making using Google's Gemini AI and a multi-agent architecture.

---

# 🌟 Overview

TrafficTwin AI provides an intelligent dashboard for traffic management authorities.

Instead of manually checking traffic cameras, weather reports, road conditions, emergency alerts, and violations, users receive AI-generated insights from a single platform.

The system combines:

- 🤖 AI-powered Traffic Analysis
- 📊 Smart Dashboards
- 📄 Automated PDF Reports
- 📍 Interactive Maps
- 🚦 Congestion Analysis
- 🚑 Emergency Support
- 🔐 Role-Based Authentication

---

# 🎯 Problem Statement

Traffic management requires analyzing information from multiple independent systems such as:

- Traffic Cameras
- Weather Services
- Road Maintenance Updates
- Emergency Vehicle Tracking
- Traffic Violations

Switching between multiple systems delays decision-making.

TrafficTwin AI simplifies this process by providing AI-generated recommendations and traffic insights through a single intelligent platform.

---

# 🚀 Features

## 🔐 Authentication

- JWT Authentication
- Secure Login
- Role-Based Access Control

---

## 👥 User Roles

### 👨‍💼 Admin

- Dashboard
- Reports
- Analytics
- User Management
- Settings

---

### 🚓 Traffic Police

- Live Dashboard
- Violations
- Congestion Hotspots
- AI Assistant
- Interactive Map

---

### 🚑 Emergency Officer

- Emergency Dashboard
- Green Corridor Support
- Emergency Monitoring
- AI Assistant

---

# 📊 Smart Dashboard

Displays

- Live Congestion
- Vehicle Count
- Emergency Status
- Weather Information
- Traffic Violations
- Live Alerts
- Traffic Analytics
- Interactive Map
- CCTV Status

---

# 🤖 AI Assistant

Powered by **Google Gemini AI**

Supports natural language queries like

- Analyze MG Road traffic
- Predict congestion
- Suggest alternate routes
- Generate traffic summary
- Emergency vehicle assistance

---

# 📍 Hotspot AI

Analyzes congestion hotspots for a selected location using AI-generated reasoning.

---

# 📄 AI Report Generator

Generates professional PDF reports containing

- Traffic Level
- Risk Score
- Priority
- Weather
- Road Condition
- Emergency Status
- Violations
- Reasons
- AI Recommendations

---

# 🗺 Interactive Map

Built using

- Leaflet
- OpenStreetMap

Supports

- Traffic Visualization
- Incident Locations
- Emergency Areas

---

# 📈 Analytics Dashboard

Displays

- Vehicle Statistics
- Congestion Trends
- Violation Trends
- Daily Analytics

---

# 🔮 Traffic Prediction

Shows predicted congestion levels.

(Currently uses simulated/demo data.)

---

# 💡 AI Recommendations

Provides traffic optimization suggestions.

(Currently uses predefined recommendations.)

---

# 🧠 Multi-Agent AI Architecture

TrafficTwin AI uses a modular AI architecture where different agents specialize in different traffic domains.

### Traffic Agent

Analyzes

- Congestion
- Vehicle Density
- Traffic Flow

---

### Weather Agent

Analyzes

- Rain
- Visibility
- Weather Impact

---

### Road Agent

Analyzes

- Road Conditions
- Construction
- Diversions

---

### Emergency Agent

Analyzes

- Ambulances
- Fire Vehicles
- Emergency Priority

---

### Violation Agent

Analyzes

- Traffic Violations
- Risk Level
- Enforcement Suggestions

---

### ADK Orchestrator

Coordinates all agents and combines their responses into a single AI-generated report.

---

# 🏗 Architecture

```
                     React Frontend
                            │
                            ▼
                     FastAPI Backend
                            │
         ┌──────────────────┼──────────────────┐
         ▼                  ▼                  ▼
   AI Assistant        Hotspot AI      Report Generator
         │                  │                  │
         └──────────────────┴──────────────────┘
                            │
                     ADK Orchestrator
                            │
                    Google Gemini API
                            │
                 Structured JSON Response
                            │
          ┌─────────────────┴─────────────────┐
          ▼                                   ▼
      Dashboard                         PDF Reports
```

---

# 🧠 AI Workflow

```
User

↓

React Dashboard

↓

FastAPI Backend

↓

ADK Orchestrator

↓

Traffic Agent
Weather Agent
Road Agent
Emergency Agent
Violation Agent

↓

Google Gemini AI

↓

Structured JSON

↓

Dashboard / PDF Report
```

---

# 🛠 Technology Stack

| Layer | Technology |
|---------|------------|
| Frontend | React, TypeScript, Tailwind CSS |
| Backend | FastAPI, Python |
| AI | Google Gemini API |
| AI Framework | Google ADK |
| Maps | Leaflet, OpenStreetMap |
| Reports | ReportLab |
| Authentication | JWT |
| Version Control | Git & GitHub |

---

# 📂 Project Structure

```
TrafficTwin-AI/

│

├── backend/
│ ├── app/
│ │ ├── adk/
│ │ ├── api/
│ │ ├── auth/
│ │ ├── reports/
│ │ ├── services/
│ │ ├── models/
│ │ └── main.py
│ │
│ ├── requirements.txt
│ └── .env.example
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── hooks/
│ │ ├── services/
│ │ └── assets/
│ │
│ ├── package.json
│ └── vite.config.ts
│
├── docs/
├── screenshots/
├── README.md
└── LICENSE
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/TrafficTwin-AI.git
```

---

## Backend

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 📸 Screenshots

Add screenshots inside

```
screenshots/
```

Recommended screenshots

- Login
- Admin Dashboard
- Traffic Police Dashboard
- Emergency Dashboard
- AI Assistant
- Hotspot AI
- Analytics
- Report Generator
- Live Map

---

# 🚀 Future Enhancements

- Live Google Maps Traffic API
- Real-Time Weather API
- CCTV Vehicle Detection
- YOLO Vehicle Counting
- ML-Based Traffic Prediction
- Signal Optimization
- Smart Route Planning
- Mobile Application
- Real-Time Notifications

---

# 🙏 Acknowledgements

- Google Gemini API
- Google Agent Development Kit (ADK)
- FastAPI
- React
- Leaflet
- OpenStreetMap
- Tailwind CSS

---

# 👩‍💻 Developer

**Naga Ashritha**

B.Tech – Computer Science Engineering

Dayananda Sagar University

GitHub:
https://github.com/ashritha30

---

# 📜 License

This project is licensed under the MIT License.
