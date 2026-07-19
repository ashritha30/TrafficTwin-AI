from fastapi import APIRouter
from app.adk.coordinator import TrafficCoordinator

router = APIRouter(
    prefix="/adk",
    tags=["Google ADK"]
)

coordinator = TrafficCoordinator()

@router.get("/status")
def status():
    return {
        "message": "Google ADK Integrated Successfully",
        "agents": coordinator.get_agents()
    }