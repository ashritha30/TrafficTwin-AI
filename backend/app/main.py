from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.traffic import router as traffic_router
from app.api.map import router as map_router 
from app.api.ai import router as ai_router
from app.api.recommendation import router as recommendation_router
from app.api.prediction import router as prediction_router
from app.api.hotspot_ai import router as hotspot_router
from app.api.digital_twin import router as digital_twin_router
from app.api.adk import router as adk_router
from app.api.adk_workflow import router as workflow_router
from app.api.live import router as live_router
from app.api.report import router as report_router
from app.auth.auth import router as auth_router

app = FastAPI(
    title="TrafficTwin AI API",
    version="1.0.0"
)



app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(traffic_router)
app.include_router(map_router)
app.include_router(ai_router)
app.include_router(recommendation_router)
app.include_router(prediction_router)
app.include_router(hotspot_router)
app.include_router(digital_twin_router)
app.include_router(adk_router)
app.include_router(workflow_router)
app.include_router(live_router)
app.include_router(report_router)
app.include_router(auth_router)


@app.get("/")
def root():
    return {
        "project": "TrafficTwin AI",
        "status": "Backend Running 🚦"
    }