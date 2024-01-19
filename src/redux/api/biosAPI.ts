import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Biography } from 'app/types';

const hostname = window.location.hostname;
const APIurl =
  hostname === 'localhost'
    ? 'http://localhost:8000'
    : 'https://ciutat-de-dones.netlify.app/.netlify/functions/bios';

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
