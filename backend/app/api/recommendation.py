from fastapi import APIRouter

router = APIRouter(
    prefix="/recommendations",
    tags=["Recommendations"]
)

@router.get("/")
def get_recommendations():
    return {
        "items": [
            {
                "type": "traffic",
                "title": "Severe congestion predicted",
                "priority": "High"
            },
            {
                "type": "signal",
                "title": "Increase signal timing by 30 seconds",
                "priority": "Medium"
            },
            {
                "type": "emergency",
                "title": "Create Green Corridor",
                "priority": "High"
            },
            {
                "type": "weather",
                "title": "Heavy Rain Alert",
                "priority": "Medium"
            }
        ]
    }