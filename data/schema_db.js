export const typeDefs = `#graphql

type Profesional {
  _id: ID!
  cedula: String!
  nombre: String!
  genero: String!
  profesiones: [String!]!
  postulaciones: [Postulacion]!
  expediente: Expediente
  empresas: [String!] 
}

type Postulacion {
  vacante: Vacante!
  fecha: String!
}

type Empleador {
  _id: ID!
  cedula: String!
  nombre: String!
  tipo: String!    # FISICA o JURIDICA
  puestosOfertados: [Vacante]!
}

type Vacante {
  _id: ID!
  titulo: String!
  area: String!
  descripcion: String!
  empresa: Empleador!
  fechaPublicacion: String!
  vacante: Vacante
}

type Expediente {
  _id: ID!
  profesional: Profesional!
  titulos: [Titulo]
  experiencias: [Experiencia]!
}

type Titulo {
  _id: ID!
  nombre: String!
  # No exponer base64 en el output
  # imagenBase64: String
  imagenUrl: String
}

type Experiencia {
  empresa: String!
  descripcion: String!
  anios: Int!
}

type Query {
  # Profesionales
  profesionales: [Profesional]!
  profesional(cedula: String!): Profesional

  # Empleadores
  empleadores: [Empleador]!
  empleador(cedula: String!): Empleador

  # Vacantes
  vacantes: [Vacante]!
  vacantePorArea(area: String!): [Vacante]!

  # Reportes
  profesionalesPorArea(area: String!): [Profesional]!
  postulantesPorArea(area: String!): [Profesional]!
  conteoPorGenero: [GeneroConteo]!
  conteoPorArea: [AreaConteo]!

  tituloPorId(id: ID!): Titulo

}

type GeneroConteo {
  genero: String!
  total: Int!
}

type AreaConteo {
  area: String!
  total: Int!
  porcentaje: Float!
}

type Mutation {
  # Registros
  agregarProfesional(cedula: String!, nombre: String!, genero: String!, profesiones: [String!]!): Profesional
  agregarEmpleador(cedula: String!, nombre: String!, tipo: String!): Empleador
  agregarVacante(titulo: String!, area: String!, descripcion: String!, empresaCedula: String!): Vacante
  agregarExpediente(profesionalCedula: String!, titulos: [TituloInput!]!, experiencias: [ExperienciaInput!]!): Expediente

  # Postulación (validación: máximo 3 por mes)
  postularVacante(profesionalId: ID!, vacanteId: ID!): Profesional
}

# input: imagenBase64 ya NO es obligatoria
input TituloInput {
  nombre: String!
  imagenBase64: String   # <-- antes era String!
}

input ExperienciaInput {
  empresa: String!
  descripcion: String!
  anios: Int!
}
`;
