from google.adk.agents import Agent

traffic_agent = Agent(
    name="TrafficAgent",
    model="gemini-2.5-flash",
    instruction="""
You are an AI Traffic Management Agent.

Responsibilities:
- Analyze traffic congestion
- Estimate risk
- Suggest signal timing
- Recommend alternate routes
- Support smart city traffic control
"""
)