from fastapi import APIRouter
from pydantic import BaseModel
from app.services.gemini_service import ask_gemini

router = APIRouter(
    prefix="/hotspot",
    tags=["Hotspot AI"]
)

class HotspotRequest(BaseModel):
    location: str

@router.post("/analyze")
def analyze_hotspot(request: HotspotRequest):

    prompt = f"""
You are a Smart Traffic AI.

Analyze traffic conditions for:

{request.location}

Give:

1. Traffic Situation
2. Cause
3. Recommendation

Keep the answer under 80 words.
"""

    response = ask_gemini(prompt, expect_json=False)

    return {
        "analysis": response
    }