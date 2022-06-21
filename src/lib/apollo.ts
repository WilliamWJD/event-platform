import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o4dkyc0hym01xm68i0hz5d/master',
    cache: new InMemoryCache()
})