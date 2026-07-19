from fastapi import APIRouter
from pydantic import BaseModel

from app.agents.traffic_agent import TrafficAgent
from app.services.firebase_service import db

from fastapi import Depends
from app.auth.dependencies import verify_token

router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)

from app.adk.orchestrator import ADKOrchestrator

agent = ADKOrchestrator()


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
def chat(
    request: ChatRequest,
    user=Depends(verify_token)
):

    result = agent.analyze(request.message)

    try:
        db.collection("ai_history").add({
        "query": request.message,
        "response": result,
    })
    except Exception as e:
     print("Firestore skipped:", e)

    return {
        "response": result
    }