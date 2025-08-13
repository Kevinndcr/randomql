import json
from faker import Faker
import random
import os

fake = Faker('es_MX')

areas = ["Informática", "Electricista", "Administración", "Contabilidad", "Turismo"]

vacantes = []

# Supón que vas a insertar luego los IDs reales de empleadores en el load
for i in range(1000):
    vacante = {
        "titulo": fake.job(),
        "area": random.choice(areas),
        "descripcion": fake.sentence(nb_words=12),
        "empresa": None,  # Lo asociarás luego en el loader
        "fechaPublicacion": fake.date_this_year().isoformat()
    }
    vacantes.append(vacante)

folder_path = os.path.join("..", "DEMO_PROYECTOFINAL", "JSON_MONGO_DATA")
output_path = os.path.join(folder_path, "vacantes.json")
os.makedirs(folder_path, exist_ok=True)

with open(output_path, "w", encoding="utf-8") as f:
    json.dump(vacantes, f, ensure_ascii=False, indent=2)

print(f"Archivo generado correctamente en: {output_path}")
