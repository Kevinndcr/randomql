# GraphQL API for Inventory Management System using Apollo Server and MongoDB.

This project is a GraphQL API designed for managing professionals, employers, job postings, and resumes. It uses MongoDB for persistent NoSQL storage, Mongoose for schema modeling, Apollo Server for the GraphQL backend engine, and Express to handle additional REST endpoints (e.g., serving Base64 images).

---

## 🏫 Academic Information.

- **University**: Universidad Técnica Nacional.
- **Campus**: Pacífico.
- **Major**: Ingeniería en Tecnologías de la Información.
- **Course**: ITI-821 - Advanced Databases.
- **Quarter**: 2C-2025.

**Team Members**:
- Luis Alejandro López Reyes.
- Kevin Córdoba Rivera.
- Sebastián Peraza Desanti.
- Sámiel Marín Cambronero.

---

## 🚀 Features.

- GraphQL API using Apollo Server.
- MongoDB as NoSQL database with support for replication.
- Models created with Mongoose for schema validation.
- Data querying and mutations using GraphQL.
- Includes business logic for resume management and job applications.
- Limits professionals to max 3 job applications per month.
- Includes report queries (by area, gender, participation count).

---

📁 Project Structure

```
📁 DEMO_PROYECTOFINAL
│
├── 📁 data
│ ├── resolversMongo.js
│ └── schema_db.js
│
├── 📁 JSON_MONGO_DATA
│ ├── empleadores.json
│ ├── expedientes.json
│ ├── profesionales.json
│ ├── titulos.json
│ └── vacantes.json
│
├── 📁 models
│ ├── mdl_Empleador.js
│ ├── mdl_Expediente.js
│ ├── mdl_Profesional.js
│ ├── mdl_Titulo.js
│ └── mdl_Vacante.js
│
├── 📁 routes
│ └── titulos.js
│
├── 📁 scripts
│ ├── 📁 Img_Base64
│ │ └── encode_titulo.py
│ ├── 📁 Massive_data_upload
│ │ ├── generate_empleadores.py
│ │ ├── generate_expedientes.py
│ │ ├── generate_profesionales.py
│ │ ├── generate_titulos.py
│ │ ├── generate_vacantes.py
│ │ └── load_all.js
│
├── index.js
├── demo_queries.graphql
├── package.json
├── package-lock.json
├── Proyecto_Final.pdf
├── README.md
└── .gitignore
```

---

🧱 GraphQL Architecture.

1. 📐 Schemas (schema_db.js).
   - Define GraphQL types, queries, and mutations like Profesional, Empleador, etc.

2. 🧬 Models (models/).
   - Represent MongoDB collections with validation rules.

3. 🔁 Resolvers (resolversMongo.js).
   - Fetch data, apply business logic, and link models with schema.

4. 🔄 Data Flow.
   1. Client sends a GraphQL query.
   2. Apollo Server validates against schema.
   3. Resolver accesses MongoDB.
   4. Data is returned to the client.

---

🔧 Setup Instructions.

📦 Dependencies Installed.

- npm init --yes
- npm pkg set type="module"
- npm i @apollo/server@^4 graphql@^16 mongoose express cors body-parser
- npm install mongoose nodemon
- pip install faker
- pip install pymongo
- npm i --save-dev nodemon
- npm install multer
- npm install

---

### ▶️ ¿How to Run?

### 🟢 Start the GraphQL Server.

### 🖼️ Massive Data and Image Upload Process.

### 1. Generate JSON Data from Python Scripts.

First, execute the Python scripts for massive data loading located in:

```bash
scripts/Massive_data_upload
```

**Example:**

```bash
python .\scripts\Massive_data_upload\[FileName].py
```

This will generate JSON files inside:

```bash
JSON_MONGO_DATA
```

---

### 2. Load JSON Files into MongoDB

Once the JSON files are ready, load them into MongoDB with:

```bash
npm run load:all
```

> **Note:** The JSON files should already be in the `/JSON_MONGO_DATA/` folder.

This command will:
- 🚮 Clear existing collections.
- 📂 Load JSON files from the `/JSON_MONGO_DATA/` directory.
- 🔗 Automatically assign relationships between documents (e.g. professionals ↔ resumes, employers ↔ vacancies).

⚠️ **Warning:** This process will delete all current data and replace it. Use only during development or testing.

---

### 3. Start the Server

Run:

```bash
npm start
```

This will:
- ▶️ Run Apollo Server Standalone on:

```
http://localhost:4000/
```

- 🖼️ Launch a mini Express server for rendering Base64 images at:

```
http://localhost:4001/api/titulos/:id/imagen
```

---

### 4. Access an Image from GraphQL

Example response from a query:

```json
"imagenUrl": "http://localhost:4001/api/titulos/6896c9b9a16c2ef2955d0b12/imagen"
```

---

### 5. Convert an Image to Base64

Stop the server and run:

```bash
python .\scripts\Img_Base64\encode_titulo.py
```

Select the image from your PC and restart the server. Querying the expediente will now render the Base64 image.

---

📊 Reports and Functionalities.

| Feature                             | Status         |
|-------------------------------------|----------------|     
| Register Professionals              | ✅ Implemented |
| Register Employers (Physical/Legal) | ✅ Implemented |
| Register Vacancies                  | ✅ Implemented |
| Register Resumes (Expedientes)      | ✅ Implemented |
| Apply to jobs (3/month limit)       | ✅ Implemented |
| List all vacancies                  | ✅ Implemented |
| Get professional by ID              | ✅ Implemented |
| Get employer with posted jobs       | ✅ Implemented |
| List professionals by area          | ✅ Implemented |
| Count professionals by gender       | ✅ Implemented |
| Count and percentage by area        | ✅ Implemented |

---

## 🔁 MongoDB Replication Setup.

*Pending...*

To complete this requirement, the following steps must be performed and documented:

- [ ] Execute `rs.initiate()` to start the replica set
- [ ] Run `rs.status()` and capture output
- [ ] Add explanation and screenshots to the documentation or README
- [ ] (Optional) Update Mongoose URI to use replica set string

---

## 📤 Distributed Database and Parallel Querying (Spark/MapReduce).

*Pending...*

Pending research and implementation tasks:

- [ ] Investigate differences between MapReduce, Spark, and MongoDB Sharding
- [ ] Decide on a simulation method for distributed or parallel queries
- [ ] Implement one aggregation query using MongoDB’s `aggregate()` (MapReduce style)
- [ ] Document chosen strategy and its advantages
- [ ] Justify how this improves scalability or performance

---

## 📘 GraphQL Summary.

### Main Types.
- `Profesional`
- `Empleador`
- `Vacante`
- `Expediente`
- `Postulacion`
- `Titulo`
- `Experiencia`

### Main Queries.
- `profesionales`
- `profesional(cedula)`
- `empleadores`
- `empleador(cedula)`
- `vacantes`
- `vacantePorArea(area)`
- `profesionalesPorArea(area)`
- `conteoPorGenero`
- `conteoPorArea`

### Main Mutations.
- `agregarProfesional`
- `agregarEmpleador`
- `agregarVacante`
- `agregarExpediente`
- `postularVacante`

---

## 🧪 Learning Outcomes.

- GraphQL schema design and relationships.
- Schema-model-resolver architecture.
- Complex logic in server (e.g., max 3 applications/month).
- Basis for replicated and distributed NoSQL systems.
- Data aggregation with MongoDB.

---

## 📜 License.

This project was developed strictly for educational.

---





