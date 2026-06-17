# 📩 Spam Detector Web Application

An end-to-end Machine Learning application that detects whether a message is **Spam** or **Not Spam** using Natural Language Processing (NLP) techniques. The project includes a trained machine learning model, a FastAPI backend, and a frontend interface for real-time predictions.

---

## 🚀 Features

- Detects spam messages in real-time
- Text preprocessing and cleaning pipeline
- TF-IDF vectorization for feature extraction
- Machine Learning classification model
- FastAPI REST API
- Interactive frontend interface
- JSON-based API responses
- Easy to deploy and extend

---

## 🛠️ Tech Stack

### Machine Learning
- Python
- Pandas
- NumPy
- Scikit-learn
- NLTK

### Backend
- FastAPI
- Uvicorn
- Pydantic

### Frontend
- HTML
- CSS
- JavaScript

### Model Persistence
- Joblib

---

## 📂 Project Structure

```text
spam-detector-app/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── model.py
│   │   ├── preprocessing.py
│   │   └── schemas.py
│   │
│   ├── model/
│   │   ├── spam_model.pkl
│   │   └── vectorizer.pkl
│   │
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── notebooks/
│   └── training.ipynb
│
├── data/
│   └── spam.csv
│
└── README.md
```

---

## 📊 Dataset

The model was trained on a spam detection dataset containing two columns:

| Column | Description |
|----------|------------|
| label | Spam or Ham (Not Spam) |
| text | Message content |

The dataset contains labeled text messages used to train and evaluate the classification model.

---

## 🧹 Data Preprocessing

Before training the model, the text data is cleaned and normalized using the following steps:

- Convert text to lowercase
- Remove URLs
- Remove special characters and punctuation
- Remove numerical values
- Remove extra whitespaces
- Transform text into numerical features using TF-IDF Vectorization

These preprocessing steps help improve model performance and generalization.

---

## 🧠 Machine Learning Pipeline

```text
Raw Text
    ↓
Text Cleaning
    ↓
TF-IDF Vectorization
    ↓
Machine Learning Model
    ↓
Prediction (Spam / Not Spam)
```

---

## 📡 API Endpoint

### Predict Spam

**Endpoint**

```http
POST /predict
```

### Request Body

```json
{
  "text": "Congratulations! You have won a free iPhone."
}
```

### Response

```json
{
  "prediction": "Spam"
}
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/spam-detector-app.git
cd spam-detector-app
```

### 2. Create Virtual Environment

```bash
python -m venv venv
```

### 3. Activate Virtual Environment

#### Windows

```bash
venv\Scripts\activate
```

#### Linux / Mac

```bash
source venv/bin/activate
```

### 4. Install Dependencies

```bash
pip install -r requirements.txt
```

---

## ▶️ Running the Backend

Navigate to the backend directory:

```bash
cd backend
```

Start the FastAPI server:

```bash
uvicorn app.main:app --reload
```

Server will start at:

```text
http://127.0.0.1:8000
```

---

## 📖 API Documentation

FastAPI automatically generates API documentation.

Swagger UI:

```text
http://127.0.0.1:8000/docs
```

ReDoc:

```text
http://127.0.0.1:8000/redoc
```

---

## 🎨 Running the Frontend

Open the frontend directory:

```bash
cd frontend
```

Run using:

- VS Code Live Server
- Any local web server

Or simply open:

```text
index.html
```

in your browser.

---

## 📈 Future Improvements

- Confidence score prediction
- Multiple language support
- User authentication
- Prediction history
- Model monitoring
- Docker deployment
- Cloud deployment (Render, Railway, AWS)

---

## 🎯 Learning Outcomes

This project demonstrates:

- Natural Language Processing (NLP)
- Text preprocessing techniques
- TF-IDF Vectorization
- Machine Learning model deployment
- FastAPI development
- Frontend and backend integration
- REST API development

---



---

## 📜 License

This project is created for educational and portfolio purposes.
