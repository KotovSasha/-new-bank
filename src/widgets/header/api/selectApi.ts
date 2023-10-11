import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type SelectArgs ={
  title: string;
  value: string;
}

export const selectApi = createApi({
  reducerPath: 'selectApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/assets' }),
  endpoints: (builder) => ({
    getSelect: builder.query<SelectArgs[], void>({
      query: () => '/options.json',
    }),
  }),
});

export const { useGetSelectQuery } = selectApi;
