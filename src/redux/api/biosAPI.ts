import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Biography } from 'app/types';

const hostname = window.location.hostname;
const APIurl =
  hostname === 'localhost'
    ? 'http://localhost:8000'
    : 'https://ciutat-de-dones.netlify.app/.netlify/functions';

type BiosResponse = Biography[];

export const biosAPI = createApi({
  reducerPath: 'biosAPI',
  baseQuery: fetchBaseQuery({ baseUrl: APIurl }),
  tagTypes: ['Bios'],
  endpoints: (builder) => ({
    getAllBios: builder.query<BiosResponse, void>({
      query: () => '/bios',
      transformResponse: (response: unknown) =>
        hostname !== 'localhost'
          ? (response as { bios: Biography[] }).bios
          : (response as Biography[]),
      providesTags: ['Bios'],
    }),
  }),
});

export const { useGetAllBiosQuery } = biosAPI;
