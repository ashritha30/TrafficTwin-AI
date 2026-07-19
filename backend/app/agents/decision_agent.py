class DecisionAgent:

    def combine(
        self,
        traffic,
        weather,
        emergency,
        road,
        violation
    ):

        return {
            "traffic": traffic,
            "weather": weather,
            "road": road,
            "emergency": emergency,
            "violation": violation
        }