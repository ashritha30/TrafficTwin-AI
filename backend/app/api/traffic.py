from fastapi import APIRouter
from app.services.simulation_service import SimulationService

router = APIRouter(
    prefix="/traffic",
    tags=["Traffic"]
)

simulation = SimulationService()

@router.get("/status")
def traffic_status():
    return simulation.generate()
