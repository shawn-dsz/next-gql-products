import { ApolloServer } from 'apollo-server-micro';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { ProductsResolver } from '../../src/schema/products.resolver';

const schema = await buildSchema({
  resolvers: [ProductsResolver],
});

const server = new ApolloServer({
  schema,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default async function handler(req, res) {
  await startServer;
  await server.createHandler({
    path: '/api/graphql',
  })(req, res);
}
