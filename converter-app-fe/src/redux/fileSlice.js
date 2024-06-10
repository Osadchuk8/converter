import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import environment from '../environment';

const apiUrl = environment.apiUrl;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    convertToExcel: builder.mutation({
      query: (file) => ({
        url: '/convert/xls',
        method: 'POST',
        body: file,
        headers: {
          'Content-Type': 'text/plain',
        },
      }),
    }),
    convertToExcel2: builder.query({
      query: () => '/convert',
    }),
  }),
});

export const { useConvertToExcelMutation } = api;