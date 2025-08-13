// Define the Titulo model schema using Mongoose.
// This schema sets the structure for the Titulos collection in MongoDB.

import mongoose from "mongoose";

const tituloSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  imagenBase64: { type: String, default: null },   // legado (opcional)
  imagenPath:   { type: String, default: null },   // ← NUEVO: '/uploads/archivo.ext'
  expediente:   { type: mongoose.Schema.Types.ObjectId, ref: "Expediente", required: true }
}, { collection: "Titulos", timestamps: true });

// Register the schema as the "Titulo" model in Mongoose.
mongoose.model("Titulo", tituloSchema);
export default mongoose.model("Titulo");
