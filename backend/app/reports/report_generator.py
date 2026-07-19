from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet
import os
from datetime import datetime


def generate_report(data):

    os.makedirs("generated_reports", exist_ok=True)

    filename = f"generated_reports/traffic_report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.pdf"

    doc = SimpleDocTemplate(filename)
    styles = getSampleStyleSheet()
    story = []

    story.append(Paragraph("<b>TrafficTwin AI</b>", styles["Title"]))
    story.append(Paragraph("Smart Traffic Incident Report", styles["Heading2"]))
    story.append(Paragraph(f"Generated: {datetime.now()}", styles["Normal"]))
    story.append(Paragraph("<br/>", styles["Normal"]))

    traffic_level = data.get("trafficLevel", "Unknown")
    risk_score = data.get("riskScore", 0)
    priority = data.get("priority", "Unknown")
    weather = data.get("weather", "Unavailable")
    road_condition = data.get("roadCondition", "Unavailable")
    emergency = data.get("emergency", "Unavailable")
    violations = data.get("violations", "Unavailable")  
    reasons = data.get("reasons", [])
    recommendations = data.get("recommendations", [])
    # Traffic Summary
    story.append(Paragraph(f"<b>Traffic Level:</b> {traffic_level}", styles["BodyText"]))
    story.append(Paragraph(f"<b>Risk Score:</b> {risk_score}%", styles["BodyText"]))
    story.append(Paragraph(f"<b>Priority:</b> {priority}", styles["BodyText"]))

    story.append(Paragraph("<br/>", styles["BodyText"]))

    story.append(Paragraph(f"<b>Weather:</b> {weather}", styles["BodyText"]))
    story.append(Paragraph(f"<b>Road Condition:</b> {road_condition}", styles["BodyText"]))
    story.append(Paragraph(f"<b>Emergency:</b> {emergency}", styles["BodyText"]))
    story.append(Paragraph(f"<b>Violations:</b> {violations}", styles["BodyText"]))

    story.append(Paragraph("<br/>", styles["BodyText"]))

    # Reasons
    story.append(Paragraph("<b>Reasons</b>", styles["Heading2"]))

    for reason in reasons:
        story.append(Paragraph(f"• {reason}", styles["BodyText"]))

    story.append(Paragraph("<br/>", styles["BodyText"]))

    # Recommendations
    story.append(Paragraph("<b>Recommendations</b>", styles["Heading2"]))

    for recommendation in recommendations:
        story.append(Paragraph(f"• {recommendation}", styles["BodyText"]))

    doc.build(story)

    return filename