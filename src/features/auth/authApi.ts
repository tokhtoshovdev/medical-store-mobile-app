import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bakery.the-watcher.uz",
    prepareHeaders: async (headers) => {
      headers.set("Accept", "application/json");

      const token = await AsyncStorage.getItem("accessToken");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/user/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),
    me: builder.query({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    updateProfile: builder.mutation({
      query: ({ id, body }) => ({
        url: `/user/${id}`,
        method: "PATCH",
        body,
      }),

      invalidatesTags: ["User"],
    }),
  }),
});

export const { useLoginMutation, useMeQuery, useUpdateProfileMutation } =
  authApi;
