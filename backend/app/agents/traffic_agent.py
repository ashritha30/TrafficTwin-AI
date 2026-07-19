from app.services.gemini_service import ask_gemini


class TrafficAgent:

    def analyze(self, location: str):

        prompt = f"""
You are an AI Smart Traffic Management System.

Analyze the traffic situation for:

{location}

Return ONLY valid JSON.

Format:

{{
    "trafficLevel":"",
    "riskScore":0,
    "priority":"",
    "reasons":[
        ""
    ],
    "recommendations":[
        ""
    ]
}}

Do not use markdown.
Do not use triple backticks.
Do not explain anything.
Return only the JSON object.
"""

        result = ask_gemini(prompt, expect_json=True)

        return result