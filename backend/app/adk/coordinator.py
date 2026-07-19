from app.adk.traffic_agent import traffic_agent
from app.adk.weather_agent import weather_agent
from app.adk.road_agent import road_agent
from app.adk.emergency_agent import emergency_agent
from app.adk.violation_agent import violation_agent


class TrafficCoordinator:

    def get_agents(self):
        return {
            "traffic": traffic_agent.name,
            "weather": weather_agent.name,
            "road": road_agent.name,
            "emergency": emergency_agent.name,
            "violation": violation_agent.name,
        }