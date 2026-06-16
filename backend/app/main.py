from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.schemas import EmailInput
from app.model import predict_spam

app = FastAPI(title="Spam Detector API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"status":"API is running succesfully."}

@app.post("/predict")
def predict_email(payload: EmailInput):
    user_text = payload.text
    
    result = predict_spam(user_text)
    
    return {"prediction": result}