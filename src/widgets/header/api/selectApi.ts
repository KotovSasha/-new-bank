import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { OPTIONS, SelectArgs } from '.';

export const selectApi = createApi({
  reducerPath: 'selectApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/assets' }),
  endpoints: (builder) => ({
    getSelect: builder.query<SelectArgs[], void>({
      query: () => OPTIONS,
    }),
  }),
});

export const { useGetSelectQuery } = selectApi;
