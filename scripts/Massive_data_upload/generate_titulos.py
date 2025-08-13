import os
import json
import random
from faker import Faker

# === Config ===
OUTPUT_PATH = os.path.join("..", "DEMO_PROYECTOFINAL", "JSON_MONGO_DATA", "titulos.json")
CANTIDAD_TITULOS = 1000

fake = Faker("es_MX")

# Base64 de ejemplo (con prefijo data URL para facilitar render)
FAKE_BASE64 = "data:image/jpeg;base64,U29sbyB1biB0aXR1bG8gZW4gYmFzZTY0Lg=="

def main():
    titulos = []
    for _ in range(CANTIDAD_TITULOS):
        titulos.append({
            "nombre": fake.job(),
            "imagenBase64": FAKE_BASE64,
            # Se asignará después en el loader con el ObjectId del expediente real
            "expediente": None
        })

    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(titulos, f, ensure_ascii=False, indent=2)

    print(f"✅ {CANTIDAD_TITULOS} títulos generados sin depender de la BD.")
    print(f"📂 Archivo: {OUTPUT_PATH}")

if __name__ == "__main__":
    main()
