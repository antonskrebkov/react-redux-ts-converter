import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import IExchangeItem from "../interfaces/IExchangeItem";

export const exchangeAPI = createApi({
  reducerPath: "exchangeAPI",
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:3002'
    baseUrl: "https://64564f9d5f9a4f236140736d.mockapi.io",
  }),
  tagTypes: ["Exchange"],
  endpoints: (build) => ({
    getCurrencies: build.query({
      query: () => "/currencies",
      providesTags: (result) => ["Exchange"],
    }),
    getExchangeHistory: build.query<IExchangeItem[], string>({
      query: () => "/exchange",
      providesTags: (result) => ["Exchange"],
    }),
    addExchangeItem: build.mutation({
      query: (exchangeItem: IExchangeItem) => ({
        url: "/exchange",
        method: "POST",
        body: exchangeItem,
      }),
      invalidatesTags: ["Exchange"],
    }),
    deleteExchangeItem: build.mutation({
      query: (exchangeItem: IExchangeItem) => ({
        url: `/exchange/${exchangeItem.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Exchange"],
    }),
  }),
});

export const {
  useGetExchangeHistoryQuery,
  useAddExchangeItemMutation,
  useDeleteExchangeItemMutation,
  useGetCurrenciesQuery,
} = exchangeAPI;
