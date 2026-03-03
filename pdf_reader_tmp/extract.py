import sys
from PyPDF2 import PdfReader

try:
    reader = PdfReader(sys.argv[1])
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    
    with open("pdf_out.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("Success")
except Exception as e:
    print(f"Error: {e}")
