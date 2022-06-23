import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'http://localhost:7085/graphql',
    cache: new InMemoryCache({
        addTypename: false
    })
});