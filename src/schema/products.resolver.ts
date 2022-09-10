import { Resolver, Query, Arg } from 'type-graphql';
import { Product } from './products';
import products from './products.json';

@Resolver()
export class ProductsResolver {
  @Query(() => [Product])
  products(): Product[] {
    return products;
  }
}
