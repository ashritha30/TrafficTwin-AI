import os
import json
from dotenv import load_dotenv
from google import genai
from google.genai.errors import ClientError

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

client = genai.Client(api_key=api_key)


def ask_gemini(prompt: str, expect_json: bool = False):

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
        )

        text = response.text.strip()

        if not expect_json:
            return text

        clean = text.replace("```json", "").replace("```", "").strip()

        try:
            return json.loads(clean)

        except json.JSONDecodeError:
            return {
                "trafficLevel": "Unknown",
                "riskScore": 0,
                "priority": "Unknown",
                "weather": "Unknown",
                "roadCondition": "Unknown",
                "emergency": "Unknown",
                "violations": "Unknown",
                "reasons": [
                    "Unable to parse AI response."
                ],
                "recommendations": [
                    "Please try again."
                ]
            }

    except ClientError as e:

        print("Gemini Error:", e)

        if expect_json:
            return {
                "trafficLevel": "Unavailable",
                "riskScore": 0,
                "priority": "Low",
                "weather": "Unavailable",
                "roadCondition": "Unavailable",
                "emergency": "Unavailable",
                "violations": "Unavailable",
                "reasons": [
                    "Gemini API quota exceeded."
                ],
                "recommendations": [
                    "Please try again later."
                ]
            }

        return "Gemini API quota exceeded. Please try again later."