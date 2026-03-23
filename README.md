my-cicd-project
🚀 CI/CD Pipeline Project
CI/CD

---

## 📌 Project Title

Automated CI/CD Pipeline for a Containerized Django Application

---

## 🎯 Objective

To implement an end-to-end CI/CD pipeline that automatically builds, tests, packages, and prepares a Django-based Expense Tracker application for deployment using GitHub Actions, Docker, and Docker Hub.

---

## 🛠️ Tools & Technologies

**Version Control:** GitHub
**CI/CD Automation:** GitHub Actions (YAML)
**Containerization:** Docker Desktop & Dockerfile
**Container Registry:** Docker Hub
**Backend:** Python + Django
**Frontend:** HTML, CSS, JavaScript
**Testing:** Django Test Framework

---

## 📁 Project Structure

```plaintext
my-cicd-project/
├── .github/
│   └── workflows/
│       └── ci-cd.yml        ← GitHub Actions pipeline
├── config/                 ← Django project settings
├── tracker/                ← Django app
│   ├── templates/
│   ├── static/
│   ├── views.py
│   └── urls.py
├── Dockerfile              ← Docker configuration
├── requirements.txt        ← Python dependencies
├── manage.py               ← Django entry point
├── .dockerignore
├── .gitignore
└── README.md
```

---

## 🔄 CI/CD Pipeline Flow

```
git push → GitHub Actions triggers
              │
              ▼
        Job 1: Build & Test
        ✅ Checkout code
        ✅ Setup Python
        ✅ Install dependencies
        ✅ Run Django tests
              │
              ▼ (only if tests pass)
        Job 2: Docker
        ✅ Login to Docker Hub
        ✅ Build Docker image
        ✅ Push image (latest tag)
```

---

## 🚀 Pipeline Stages

**Source Stage:** Code committed to GitHub repository
**Trigger:** Push to main branch triggers GitHub Actions
**Build Stage:** Checkout code, install dependencies, run tests
**Package Stage:** Build Docker image and push to Docker Hub
**Artifact:** Container image available on Docker Hub

---

## ⚙️ How to Run Locally

```bash
# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run server
python manage.py runserver
```

👉 Visit: http://127.0.0.1:8000

---

## 🐳 Docker

```bash
# Build image
docker build -t my-cicd-app .

# Run container
docker run -p 8000:8000 my-cicd-app

# Visit http://localhost:8000
```

---

## 🔐 GitHub Secrets Required

| Secret          | Description             |
| --------------- | ----------------------- |
| DOCKER_USERNAME | Docker Hub username     |
| DOCKER_PASSWORD | Docker Hub access token |

---

## 🌐 Application Features

* Add expenses
* Delete expenses
* Real-time total calculation
* Modern UI dashboard

---

## ✅ Expected Output

A fully automated pipeline that ensures every code change is integrated, tested, and containerized, providing a deployable Docker image on Docker Hub with minimal manual intervention.

---

## 👨‍💻 Author

Mehal Jain

---
