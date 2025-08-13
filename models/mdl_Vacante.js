// Define the Vacante model schema using Mongoose.
// This schema sets the structure for the Vacante collection in MongoDB.

import mongoose from "mongoose";

const vacanteSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  area: { type: String, required: true },
  descripcion: { type: String, required: true },
  empresa: { type: mongoose.Schema.Types.ObjectId, ref: "Empleador", required: true },
  fechaPublicacion: { type: Date, default: Date.now }
}, { collection: "Vacantes" });

// Register the schema as the "Vacante" model in Mongoose.
mongoose.model("Vacante", vacanteSchema);
export default mongoose.model("Vacante");
