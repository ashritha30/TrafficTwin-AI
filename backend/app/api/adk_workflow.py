from fastapi import APIRouter
from pydantic import BaseModel

from app.adk.orchestrator import ADKOrchestrator

router = APIRouter(
    prefix="/workflow",
    tags=["ADK Workflow"]
)

orchestrator = ADKOrchestrator()


class Request(BaseModel):
    location: str


@router.post("/analyze")
def analyze(request: Request):

    return orchestrator.analyze(request.location)