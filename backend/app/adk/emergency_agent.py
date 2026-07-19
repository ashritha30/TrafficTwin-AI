from google.adk.agents import Agent

emergency_agent = Agent(
    name="EmergencyAgent",
    model="gemini-2.5-flash",
    instruction="""
You manage emergency response.

Provide:
- Ambulance priority
- Fire truck dispatch
- Green corridor
- Emergency alerts
"""
)