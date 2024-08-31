import { Users } from '@/types/user';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const smartApi = createApi({
  reducerPath: 'smartApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    getAllUsers: build.query<Users, void>({
      query: () => `users`,
      providesTags: ['User'],
    }),
  }),
});

export const { useGetAllUsersQuery } = smartApi;
