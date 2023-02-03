import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const starwarsApi = createApi({
    reducerPath: 'starwarsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
    tagTyper: [],
    endpoints: builder => ({
        getAll: builder.query({
            query: () => 'people/'
        }),
        getByName: builder.query({
            query: (name) => `people/?name=${name}`
        }),
    })
});

export const { useGetAllQuery, usetGetByIdQuery } = starwarsApi;