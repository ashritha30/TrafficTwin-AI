from app.agents.traffic_agent import TrafficAgent
from app.agents.weather_agent import WeatherAgent
from app.agents.emergency_agent import EmergencyAgent
from app.agents.road_agent import RoadAgent
from app.agents.decision_agent import DecisionAgent
from app.agents.violation_agent import ViolationAgent


class CommandCenter:

    def __init__(self):

        self.traffic = TrafficAgent()
        self.weather = WeatherAgent()
        self.emergency = EmergencyAgent()
        self.road = RoadAgent()
        self.decision = DecisionAgent()
        self.violation = ViolationAgent()

    def analyze(self, location):

        traffic = self.traffic.analyze(location)

        weather = self.weather.analyze(location)

        emergency = self.emergency.analyze(location)

        road = self.road.analyze(location)

       

        violation = self.violation.analyze(location)

        return self.decision.combine(
    traffic,
    weather,
    emergency,
    road,
    violation
)