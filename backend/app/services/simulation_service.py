import random

class SimulationService:

    def generate(self):

        return {
            "vehicles": random.randint(10000, 15000),
            "congestion": random.choice([
                "Low",
                "Moderate",
                "High",
                "Severe"
            ]),
            "violations": random.randint(80, 200),
            "emergency": random.randint(0, 8),
            "weather": random.choice([
                "Sunny",
                "Cloudy",
                "Rain"
            ])
        }