import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class ProductAttribute {
  @Field(() => ID)
  key: string;

  @Field(() => String)
  value: string;
}

@ObjectType()
export class Product {
  @Field(() => ID)
  name: string;

  @Field(() => [ProductAttribute])
  attributes: ProductAttribute[];

  @Field(() => [String])
  description: string[];

  @Field(() => String)
  image: string;

  @Field(() => Number)
  ageInWeeks: number;

  @Field(() => String)
  sex: string;

  @Field(() => String)
  breed: string;

  @Field(() => String)
  color: string;

  @Field(() => Number)
  fee: number;

  @Field(() => Number)
  weight: number;

  @Field(() => String)
  availableDate: string;
}
