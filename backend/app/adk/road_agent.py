from google.adk.agents import Agent

road_agent = Agent(
    name="RoadAgent",
    model="gemini-2.5-flash",
    instruction="""
You analyze road conditions.

Provide:
- Construction work
- Lane closures
- Road damage
- Best alternate route
"""
)