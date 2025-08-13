// Define the Profesional model schema using Mongoose.
// This schema sets the structure for the Profesional collection in MongoDB.

import mongoose from "mongoose";

const profesionalSchema = new mongoose.Schema({
  cedula: { type: String, required: true },
  nombre: { type: String, required: true },
  genero: { type: String, required: true },
  profesiones: [{ type: String, required: true }],
  postulaciones: [{
    vacanteId: { type: mongoose.Schema.Types.ObjectId, ref: "Vacante" },
    fecha: { type: Date, required: true }
  }]
}, { collection: "Profesionales" });

// Register the schema as the "Profesional" model in Mongoose.
mongoose.model("Profesional", profesionalSchema);
export default mongoose.model("Profesional");
