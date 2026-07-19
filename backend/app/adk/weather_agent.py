from google.adk.agents import Agent

weather_agent = Agent(
    name="WeatherAgent",
    model="gemini-2.5-flash",
    instruction="""
You analyze weather conditions affecting traffic.

Provide:
- Rain impact
- Visibility
- Road safety
- Traffic impact
"""
)