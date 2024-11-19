import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import typeDefs from './models/typedefs.mjs';
import resolvers from './models/resolvers.mjs';

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const server = new ApolloServer({ typeDefs, resolvers });

await server.start();
server.applyMiddleware({ app });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}${server.graphqlPath}`);
});
