import json
from faker import Faker # para hacer la carga masiva de datos
import random
import os

# se inicializa Faker en español
fake = Faker('es_MX')

# ejemplos con áreas de profesiones
areas = ["Informática", "Electricista", "Administración", "Contabilidad", "Turismo"]

profesionales = []

for i in range(1000):  # se cambia el valor si se necesitan más o menos profesionales
    fake.unique.clear()  # se limpian los datos únicos de Faker para evitar duplicados
    profesional = {
        "cedula": fake.unique.random_number(digits=9, fix_len=True),
        "nombre": fake.name(),
        "genero": random.choice(["Masculino", "Femenino", "Otro"]),
        "profesiones": random.sample(areas, k=random.randint(1, 3)),
        "postulaciones": []  # vacías por ahora
    }
    profesionales.append(profesional)

# se especifica la ruta de la carpeta y el nombre del archivo JSON
folder_path = os.path.join("..", "DEMO_PROYECTOFINAL", "JSON_MONGO_DATA")
output_path = os.path.join(folder_path, "profesionales.json")

# se crea la carpeta si no existe
os.makedirs(folder_path, exist_ok=True)

# se guarda el JSON
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(profesionales, f, ensure_ascii=False, indent=2)

print(f"Archivo generado correctamente en: {output_path}")

