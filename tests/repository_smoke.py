from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
html = list(ROOT.glob("*.html"))
assert html, "no gallery page found"
text = "\n".join(p.read_text(encoding="utf-8") for p in html).lower()
assert "img" in text
print("Image Gallery smoke check passed")
