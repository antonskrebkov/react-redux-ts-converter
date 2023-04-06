import { createSlice } from "@reduxjs/toolkit";
import IExchangeItem from "../../interfaces/IExchangeItem";

interface ExchangeState {
  convertedAmount: string,
  exchangeList: IExchangeItem[],
}

const initialState: ExchangeState = {
  convertedAmount: "",
  exchangeList: []
}

export const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {

  }
})

export default exchangeSlice.reducer