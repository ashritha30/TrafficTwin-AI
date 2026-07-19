import random

traffic_data = {
    "vehicles": random.randint(10000, 15000),
    "congestion": random.choice([
        "Low",
        "Moderate",
        "High",
        "Severe"
    ]),
    "violations": random.randint(50, 200),
    "emergency": random.randint(0, 8),
    "weather": random.choice([
        "Sunny",
        "Cloudy",
        "Rain"
    ]),
    "roads": [
        {
            "name": "MG Road",
            "status": random.choice(["Free", "Moderate", "Congested"]),
            "risk": random.randint(40, 95)
        },
        {
            "name": "Outer Ring Road",
            "status": random.choice(["Free", "Moderate", "Congested"]),
            "risk": random.randint(40, 95)
        },
        {
            "name": "Silk Board",
            "status": random.choice(["Free", "Moderate", "Congested"]),
            "risk": random.randint(40, 95)
        }
    ]
}