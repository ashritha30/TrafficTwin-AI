import random


class LiveSimulator:

    def generate(self):

        return {
            "trafficLevel": random.choice([
                "Low",
                "Moderate",
                "High",
                "Severe"
            ]),

            "vehicles": random.randint(9000, 15000),

            "violations": random.randint(80, 220),

            "emergency": random.randint(0, 8)
        }