import pickle
import os
from app.preprocessing import preprocessing

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_PATH = os.path.join(BASE_DIR, 'model', 'spam_model.pkl')
VECTORIZER_PATH = os.path.join(BASE_DIR, 'model', 'vectorizer.pkl')

model = None
tfidf = None

def load_model_assets():
    global model, tfidf
    if model is None or tfidf is None:
        with open(MODEL_PATH, 'rb') as m_file:
            model = pickle.load(m_file)
        with open(VECTORIZER_PATH, 'rb') as v_file:
            tfidf = pickle.load(v_file)

def predict_spam(raw_text: str) -> str:
    
    load_model_assets()
    
    cleaned_text = preprocessing(raw_text)
    vectorized_text = tfidf.transform([cleaned_text])
    
    prediction = model.predict(vectorized_text)[0] 
    
    return prediction