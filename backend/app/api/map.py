from fastapi import APIRouter

router = APIRouter(
    prefix="/map",
    tags=["Map"]
)

@router.get("/hotspots")
def get_hotspots():
    return {
        "hotspots": [
            {
                "name": "MG Road",
                "lat": 12.9756,
                "lng": 77.6050,
                "level": "High",
                "description": "Heavy rain and office rush hour"
            },
            {
                "name": "Silk Board",
                "lat": 12.9177,
                "lng": 77.6229,
                "level": "Severe",
                "description": "Heavy rain and office rush for 2 hours"
            },
            {
                "name": "Outer Ring Road",
                "lat": 12.9495,
                "lng": 77.6980,
                "level": "Moderate",
                "description": "Moderate congestion due to rain and office traffic"
            },
            {
                "name": "Electronic City",
                "lat": 12.8456,
                "lng": 77.6603,
                "level": "Low",
                "description": "Light traffic with no major delays"
            }
        ]
    }