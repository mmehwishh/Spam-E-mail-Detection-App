import re
import nltk
from nltk.corpus import stopwords

nltk.download('punkt')
nltk.download('stopwords')
nltk.download('punkt_tab')
stop_words = set(stopwords.words('english'))

def preprocessing(email_text):
    if not isinstance(email_text, str):
        email_text = str(email_text)

    # Lowercase convert 
    email_text = email_text.lower()
    
    # Punctuations aur special characters 
    email_text = re.sub(r'[^a-zA-Z ]', '', email_text)

    # Tokenization
    tokenized_text = nltk.word_tokenize(email_text)

    # Stopwords removal
    cleaned_data = [word for word in tokenized_text if word not in stop_words]
    email_text = ' '.join(cleaned_data)

    return email_text