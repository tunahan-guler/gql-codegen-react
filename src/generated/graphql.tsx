import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Byte` scalar type represents non-fractional whole numeric values. Byte can represent values between 0 and 255. */
  Byte: any;
  /** The `Date` scalar represents an ISO-8601 compliant date type. */
  Date: any;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
  /** The built-in `Decimal` scalar type. */
  Decimal: any;
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  /** The `TimeSpan` scalar represents an ISO-8601 compliant duration type. */
  TimeSpan: any;
};

export type Filetype = {
  __typename?: 'Filetype';
  id: Scalars['Long'];
  typename: Scalars['String'];
  userfiles: Array<Userfile>;
};

export type Mutation = {
  __typename?: 'Mutation';
  exMutation: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
  welcome: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  adress?: Maybe<Scalars['String']>;
  changetime?: Maybe<Scalars['DateTime']>;
  changeuser?: Maybe<Scalars['Long']>;
  cityid?: Maybe<Scalars['Long']>;
  createtime?: Maybe<Scalars['DateTime']>;
  createuser?: Maybe<Scalars['Long']>;
  districtsid?: Maybe<Scalars['Long']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
  identificationnumber?: Maybe<Scalars['Decimal']>;
  name: Scalars['String'];
  password: Scalars['String'];
  phonenumber?: Maybe<Scalars['Decimal']>;
  schoolname?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  surname: Scalars['String'];
  userfiles: Array<Userfile>;
  username: Scalars['String'];
  usersmovements: Array<Usersmovement>;
  usertypes?: Maybe<Usertype>;
  usertypesid?: Maybe<Scalars['Long']>;
};

export type Userfile = {
  __typename?: 'Userfile';
  changetime?: Maybe<Scalars['DateTime']>;
  changeuser?: Maybe<Scalars['Long']>;
  createtime?: Maybe<Scalars['DateTime']>;
  createuser?: Maybe<Scalars['Long']>;
  data?: Maybe<Array<Scalars['Byte']>>;
  extensitions?: Maybe<Scalars['String']>;
  filetypes: Filetype;
  filetypesid: Scalars['Long'];
  id: Scalars['Long'];
  users: User;
  usersid: Scalars['Long'];
};

export type Usersmovement = {
  __typename?: 'Usersmovement';
  createtime?: Maybe<Scalars['DateTime']>;
  createuser?: Maybe<Scalars['Long']>;
  entrytime?: Maybe<Scalars['TimeSpan']>;
  exittime?: Maybe<Scalars['TimeSpan']>;
  id: Scalars['Long'];
  transactiondate?: Maybe<Scalars['Date']>;
  users: User;
  usersid: Scalars['Long'];
};

export type Usertype = {
  __typename?: 'Usertype';
  id: Scalars['Long'];
  typename?: Maybe<Scalars['String']>;
  users: Array<User>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: any, name: string, surname: string, schoolname?: string | null, status: number }> };


export const GetUsersDocument = gql`
    query GetUsers {
  users {
    id
    name
    surname
    schoolname
    status
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;