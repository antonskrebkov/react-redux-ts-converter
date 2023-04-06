import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

interface IArgs {
  to: string,
  from: string,
  amount: string,
}

export const ratesAPI = createApi({
  reducerPath: 'ratesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.apilayer.com/exchangerates_data',
    prepareHeaders: (headers, { getState }) => {
      headers.set('apikey', 'yjOPFmRND5OiQ6kyQslKPlXeBiZkBWTH')
      return headers
    }
  }),
  endpoints: (build) => ({
    getConvertedAmount: build.mutation({
      query: ({to, from, amount}: IArgs) => ({
        url: `/convert?to=${to}&from=${from}&amount=${amount}`,
      }),
    }),
  }),
})

export const {useGetConvertedAmountMutation} = ratesAPI;