from fastapi import APIRouter
from app.services.live_simulator import LiveSimulator

router = APIRouter(
    prefix="/live",
    tags=["Live Dashboard"]
)

simulator = LiveSimulator()


@router.get("/dashboard")
def dashboard():
    return simulator.generate()