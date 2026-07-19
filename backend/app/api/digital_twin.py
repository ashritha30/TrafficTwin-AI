from fastapi import APIRouter

router = APIRouter(
    prefix="/digital-twin",
    tags=["Digital Twin"]
)

@router.get("/{location}")
def digital_twin(location: str):

    return {
        "location": location,
        "traffic": "High",
        "vehicles": 3521,
        "prediction": "85%",
        "weather": "Heavy Rain",
        "risk": 92,
        "recommendation": "Increase green signal timing by 30 seconds.",
        "emergency": "Green Corridor Required"
    }