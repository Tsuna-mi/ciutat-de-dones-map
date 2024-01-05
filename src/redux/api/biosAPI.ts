import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Biography } from 'app/types';

const APIurl = 'http://localhost:8000';

type BiosResponse = Biography[];

export const biosAPI = createApi({
  reducerPath: 'biosAPI',
  baseQuery: fetchBaseQuery({ baseUrl: APIurl }),
  tagTypes: ['Bios'],
  endpoints: (builder) => ({
    getAllBios: builder.query<BiosResponse, void>({
      query: () => '/bios',
      providesTags: ['Bios'],
    }),
  }),
});

export const { useGetAllBiosQuery } = biosAPI;
