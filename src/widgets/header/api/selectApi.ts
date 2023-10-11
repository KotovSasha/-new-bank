import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ISelect {
  title: string;
  value: string;
}

export const selectApi = createApi({
  reducerPath: 'selectApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/assets' }),
  endpoints: (builder) => ({
    getSelect: builder.query<ISelect[], void>({
      query: () => '/options.json',
    }),
  }),
});

export const { useGetSelectQuery } = selectApi;
