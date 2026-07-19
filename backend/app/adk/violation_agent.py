from google.adk.agents import Agent

violation_agent = Agent(
    name="ViolationAgent",
    model="gemini-2.5-flash",
    instruction="""
You monitor traffic violations.

Provide:
- Signal jumping
- Over speeding
- Helmet violations
- Accident hotspots
"""
)