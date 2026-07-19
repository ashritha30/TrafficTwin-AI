from fastapi import APIRouter, Depends
from fastapi.responses import FileResponse
from pydantic import BaseModel

from app.adk.orchestrator import ADKOrchestrator
from app.reports.report_generator import generate_report
from app.auth.dependencies import verify_token

router = APIRouter(
    prefix="/report",
    tags=["Report"]
)

agent = ADKOrchestrator()


class ReportRequest(BaseModel):
    location: str


@router.post("/generate")
def generate(
    request: ReportRequest,
    user=Depends(verify_token)
):
    data = agent.analyze(request.location)

    pdf = generate_report(data)

    return FileResponse(
        path=pdf,
        media_type="application/pdf",
        filename="Traffic_Report.pdf"
    )