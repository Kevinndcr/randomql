// Define the Expediente model schema using Mongoose.
// This schema sets the structure for the Expediente collection in MongoDB.

import mongoose from "mongoose";

const expedienteSchema = new mongoose.Schema({
  profesional: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profesional",
    required: true,
    unique: true,           
  },
  experiencias: [
    {
      empresa: { type: String, required: true },
      descripcion: { type: String, required: true },
      anios: { type: Number, min: 0, required: true },
    }
  ]
}, {
  collection: "Expedientes",
  timestamps: true           
});

// Register the schema as the "Expediente" model in Mongoose.
mongoose.model("Expediente", expedienteSchema);
export default mongoose.model("Expediente");
