from pathlib import Path
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import letter
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf" / "Nikhil_Vaddey_Resume.pdf"
PUBLIC = ROOT / "public" / "resume.pdf"
OUT.parent.mkdir(parents=True, exist_ok=True)

W, H = letter
INK = HexColor("#15121c")
PURPLE = HexColor("#7756d8")
GOLD = HexColor("#b78a30")
MUTED = HexColor("#67626f")
LINE = HexColor("#ded8e8")


def wrap(text, font, size, width):
    words = text.split()
    lines, current = [], ""
    for word in words:
        trial = f"{current} {word}".strip()
        if stringWidth(trial, font, size) <= width:
            current = trial
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def section(c, title, x, y, width):
    c.setFillColor(PURPLE)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawString(x, y, title.upper())
    c.setStrokeColor(LINE)
    c.setLineWidth(0.7)
    c.line(x, y - 5, x + width, y - 5)
    return y - 19


def entry(c, title, subtitle, body, x, y, width, accent=GOLD):
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 10.2)
    c.drawString(x, y, title)
    if subtitle:
        c.setFillColor(accent)
        c.setFont("Helvetica", 7.4)
        c.drawRightString(x + width, y + 0.5, subtitle.upper())
    y -= 13
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 8.15)
    for line in wrap(body, "Helvetica", 8.15, width):
        c.drawString(x, y, line)
        y -= 10.2
    return y - 8


c = canvas.Canvas(str(OUT), pagesize=letter)
c.setTitle("Nikhil Vaddey - Resume")
c.setAuthor("Nikhil Vaddey")

# Header
c.setFillColor(INK)
c.setFont("Helvetica-Bold", 28)
c.drawString(42, 744, "NIKHIL VADDEY")
c.setFillColor(PURPLE)
c.rect(42, 730, 64, 3, fill=1, stroke=0)
c.setFillColor(MUTED)
c.setFont("Helvetica", 9)
c.drawString(42, 714, "Founder  /  Builder  /  Product Strategist")
c.setFont("Helvetica", 8.4)
c.drawRightString(570, 744, "nikhil_vaddey@berkeley.edu")
c.drawRightString(570, 730, "Berkeley, California")
c.drawRightString(570, 716, "Originally from Charlotte, North Carolina")

c.setFillColor(HexColor("#f3effa"))
c.roundRect(42, 660, 528, 37, 7, fill=1, stroke=0)
c.setFillColor(INK)
c.setFont("Times-Roman", 10.5)
summary = "UC Berkeley Industrial Engineering and Operations Research student building software products, businesses, and practical systems across AI, product strategy, finance, and operations."
for i, line in enumerate(wrap(summary, "Times-Roman", 10.5, 500)):
    c.drawString(56, 682 - i * 13, line)

# Columns
left_x, left_w = 42, 326
right_x, right_w = 392, 178
y_left = section(c, "Experience", left_x, 638, left_w)
y_left = entry(c, "NnR Technologies", "Founder & CEO", "Founded and operated a software and automation business serving 8+ clients, generating five-figure revenue, and receiving a reported $53,000 valuation through a MassMutual startup program.", left_x, y_left, left_w)
y_left = entry(c, "Citco", "Private Equity Fund Administration Intern", "Prototyped a workflow for identifying and extracting information from private-equity side letter documents, with an estimated $283,000 in potential annual savings. Projection, not realized savings.", left_x, y_left, left_w)
y_left = entry(c, "GitHub", "Product Research Consultant", "Researched developer workflows, onboarding, collaboration, and product adoption to surface product opportunities.", left_x, y_left, left_w)
y_left = entry(c, "OpenMind", "Product Strategy Consultant", "Explored user needs, competitive positioning, product strategy, and go-to-market planning.", left_x, y_left, left_w)
y_left = entry(c, "Handshake", "AI Prompt Engineer", "Evaluated model responses, identified quality issues, and produced structured feedback.", left_x, y_left, left_w)

y_left = section(c, "Selected products", left_x, y_left + 1, left_w)
y_left = entry(c, "Orbit", "AI sales technology", "Co-founded and developed a platform exploring live conversational guidance, post-call analytics, coaching, and practice experiences.", left_x, y_left, left_w)
y_left = entry(c, "GRUB", "Campus marketplace", "Developing a two-sided marketplace concept connecting students who need errands completed with students willing to complete them.", left_x, y_left, left_w)

y_right = section(c, "Education", right_x, 638, right_w)
y_right = entry(c, "UC Berkeley", "Current", "Industrial Engineering and Operations Research. Building from Berkeley across startups, product strategy, and finance.", right_x, y_right, right_w)

y_right = section(c, "Leadership & impact", right_x, y_right + 1, right_w)
y_right = entry(c, "FBLA", "Regional leadership", "Former North Carolina Southwest Region Vice President; represented 5,000+ members and led 90+ officer interviews.", right_x, y_right, right_w)
y_right = entry(c, "Competitive Programming", "National", "Second place nationally in FBLA Coding & Programming in 2025.", right_x, y_right, right_w)
y_right = entry(c, "Tech Dreams 4 Kids", "Co-founder", "Helped raise over $5,000 and distribute 60+ refurbished computer kits.", right_x, y_right, right_w)
y_right = entry(c, "Public Speaking", "500+ audience", "Delivered a presentation and live VR demonstration at WICT Carolinas Tech It Out.", right_x, y_right, right_w)

y_right = section(c, "Focus", right_x, y_right + 1, right_w)
c.setFillColor(INK)
c.setFont("Helvetica", 8.2)
focus = ["Product development", "Artificial intelligence", "Software engineering", "Business automation", "Financial markets", "Operations research", "Client discovery", "Public speaking"]
for i, item in enumerate(focus):
    yy = y_right - i * 15
    c.setFillColor(GOLD)
    c.circle(right_x + 3, yy + 2, 1.6, fill=1, stroke=0)
    c.setFillColor(INK)
    c.drawString(right_x + 12, yy, item)

c.setStrokeColor(LINE)
c.line(42, 34, 570, 34)
c.setFillColor(MUTED)
c.setFont("Helvetica", 6.8)
c.drawString(42, 21, "Portfolio: nikhil-vaddey.vaddeynikhil.chatgpt.site")
c.drawRightString(570, 21, "Always building.")
c.showPage()
c.save()

PUBLIC.write_bytes(OUT.read_bytes())
print(OUT)
