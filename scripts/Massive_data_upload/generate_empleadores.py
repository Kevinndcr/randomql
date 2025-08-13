import json
from faker import Faker
import random
import os

fake = Faker('es_MX')

empleadores = []

for i in range(1000):
    empleador = {
        "cedula": fake.unique.random_number(digits=9, fix_len=True),
        "nombre": fake.company(),
        "tipo": random.choice(["FISICA", "JURIDICA"]),
        "puestosOfertados": []
    }
    empleadores.append(empleador)

folder_path = os.path.join("..", "DEMO_PROYECTOFINAL", "JSON_MONGO_DATA")
output_path = os.path.join(folder_path, "empleadores.json")
os.makedirs(folder_path, exist_ok=True)

with open(output_path, "w", encoding="utf-8") as f:
    json.dump(empleadores, f, ensure_ascii=False, indent=2)

print(f"Archivo generado correctamente en: {output_path}")
