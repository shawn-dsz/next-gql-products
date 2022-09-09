import { ApolloServer } from 'apollo-server-micro';
import 'reflect-metadata';
import {
  buildSchema,
  Resolver,
  Query,
  Arg,
  ObjectType,
  Field,
  ID,
} from 'type-graphql';

@ObjectType()
export class Product {
  @Field(() => ID)
  name: string;
}

@Resolver(Product)
export class ProductResolver {
  @Query(() => [Product])
  products(): Product[] {
    return [{ name: 'Snickers' }, { name: 'Sunny' }];
  }
}

const schema = await buildSchema({
  resolvers: [ProductResolver],
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
