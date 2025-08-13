// Define the Empleador model schema using Mongoose.
// This schema sets the structure for the Empleador collection in MongoDB.

import mongoose from "mongoose";

const empleadorSchema = new mongoose.Schema({
  cedula: { type: String, required: true },
  nombre: { type: String, required: true },
  tipo: { type: String, enum: ['FISICA', 'JURIDICA'], required: true },
  puestosOfertados: [{ type: mongoose.Schema.Types.ObjectId, ref: "Vacante" }]
}, { collection: "Empleadores" });

// Register the schema as the "Empleador" model in Mongoose.
mongoose.model("Empleador", empleadorSchema);
export default mongoose.model("Empleador");
