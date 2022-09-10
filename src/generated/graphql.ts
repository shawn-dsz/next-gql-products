import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Product = {
  __typename?: 'Product';
  ageInWeeks: Scalars['Float'];
  attributes: Array<ProductAttribute>;
  availableDate: Scalars['String'];
  breed: Scalars['String'];
  color: Scalars['String'];
  description: Array<Scalars['String']>;
  fee: Scalars['Float'];
  image: Scalars['String'];
  name: Scalars['ID'];
  sex: Scalars['String'];
  weight: Scalars['Float'];
};

export type ProductAttribute = {
  __typename?: 'ProductAttribute';
  key: Scalars['ID'];
  value: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  products: Array<Product>;
};

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', name: string, breed: string, ageInWeeks: number, image: string, sex: string, weight: number, fee: number }> };


export const GetProductsDocument = gql`
    query getProducts {
  products {
    name
    breed
    ageInWeeks
    image
    sex
    weight
    fee
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getProducts(variables?: GetProductsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProductsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductsQuery>(GetProductsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProducts', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;