from app.services.gemini_service import ask_gemini

class ADKOrchestrator:

    def analyze(self, location: str):

        prompt = f"""
You are TrafficTwin AI.

Analyze the following traffic situation.

Location:
{location}

You are acting as five expert agents:

1. Traffic Agent
2. Weather Agent
3. Road Agent
4. Emergency Agent
5. Violation Agent

Combine all observations into ONE response.

Return ONLY JSON.

{{
    "trafficLevel":"",
    "riskScore":0,
    "priority":"",
    "weather":"",
    "roadCondition":"",
    "emergency":"",
    "violations":"",
    "reasons":[
        ""
    ],
    "recommendations":[
        ""
    ]
}}
"""

        return ask_gemini(prompt, expect_json=True)