import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Anime {
    id: ID!
    title: String!
    startDate: String!
    endDate: String
    averageScore: Int!
  }

  type Query {
    getAnimes: [Anime]
    getAnime(id: ID!): Anime
  }

  type Mutation {
    addAnime(title: String!, startDate: String!, endDate: String, averageScore: Int!): Anime
    updateAnime(id: ID!, title: String!, startDate: String!, endDate: String, averageScore: Int!): Anime
    deleteAnime(id: ID!): Anime
  }
`;


export default typeDefs;