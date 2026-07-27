import os
import json
import firebase_admin
from firebase_admin import credentials, firestore

if not firebase_admin._apps:
    firebase_credentials = os.getenv("FIREBASE_CREDENTIALS")

    if firebase_credentials:
        # Running on Render
        cred_dict = json.loads(firebase_credentials)
        cred = credentials.Certificate(cred_dict)
    else:
        # Running locally
        cred = credentials.Certificate("firebase-key.json")

    firebase_admin.initialize_app(cred)

db = firestore.client()