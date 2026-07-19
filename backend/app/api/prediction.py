from fastapi import APIRouter
import random

router = APIRouter(
    prefix="/prediction",
    tags=["Prediction"]
)

@router.get("/")
def get_prediction():

    current = random.randint(55, 85)

    return {
        "current": current,
        "next15": min(current + random.randint(2, 8), 100),
        "next30": min(current + random.randint(5, 12), 100),
        "next60": max(current - random.randint(0, 10), 30),
        "trend": "Increasing"
    }