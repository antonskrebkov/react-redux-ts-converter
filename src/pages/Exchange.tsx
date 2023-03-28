import { useState } from "react";
import "../assets/styles/styles.css";
import CustomSelect from "../components/UI/select/CustomSelect";
import AmountInput from "../components/UI/amountInput/AmountInput";
import axios, { AxiosError, AxiosResponse } from "axios";
import Loader from "../components/UI/loader/Loader";
import swap from "../assets/images/swap.svg";
import ICurrency from "../interfaces/ICurrency";
import IExchangeItem from "../interfaces/IExchangeItem";
import ExchangeItem from "../components/ExchangeItem/ExchangeItem";

const Exchange: React.FC = () => {
  const currencies: ICurrency[] = [
    { value: "AED", label: "AED" },
    { value: "AFN", label: "AFN" },
    { value: "ALL", label: "ALL" },
    { value: "AMD", label: "AMD" },
    { value: "ANG", label: "ANG" },
    { value: "AOA", label: "AOA" },
    { value: "ARS", label: "ARS" },
    { value: "AUD", label: "AUD" },
    { value: "AWG", label: "AWG" },
    { value: "AZN", label: "AZN" },
    { value: "BAM", label: "BAM" },
    { value: "BBD", label: "BBD" },
    { value: "BDT", label: "BDT" },
    { value: "BGN", label: "BGN" },
    { value: "BHD", label: "BHD" },
    { value: "BIF", label: "BIF" },
    { value: "BMD", label: "BMD" },
    { value: "BND", label: "BND" },
    { value: "BOB", label: "BOB" },
    { value: "BRL", label: "BRL" },
    { value: "BSD", label: "BSD" },
    { value: "BTC", label: "BTC" },
    { value: "BTN", label: "BTN" },
    { value: "BWP", label: "BWP" },
    { value: "BYN", label: "BYN" },
    { value: "BYR", label: "BYR" },
    { value: "BZD", label: "BZD" },
    { value: "CAD", label: "CAD" },
    { value: "CDF", label: "CDF" },
    { value: "CHF", label: "CHF" },
    { value: "CLF", label: "CLF" },
    { value: "CLP", label: "CLP" },
    { value: "CNY", label: "CNY" },
    { value: "COP", label: "COP" },
    { value: "CRC", label: "CRC" },
    { value: "CUC", label: "CUC" },
    { value: "CUP", label: "CUP" },
    { value: "CVE", label: "CVE" },
    { value: "CZK", label: "CZK" },
    { value: "DJF", label: "DJF" },
    { value: "DKK", label: "DKK" },
    { value: "DOP", label: "DOP" },
    { value: "DZD", label: "DZD" },
    { value: "EGP", label: "EGP" },
    { value: "ERN", label: "ERN" },
    { value: "ETB", label: "ETB" },
    { value: "EUR", label: "EUR" },
    { value: "FJD", label: "FJD" },
    { value: "FKP", label: "FKP" },
    { value: "GBP", label: "GBP" },
    { value: "GEL", label: "GEL" },
    { value: "GGP", label: "GGP" },
    { value: "GHS", label: "GHS" },
    { value: "GIP", label: "GIP" },
    { value: "GMD", label: "GMD" },
    { value: "GNF", label: "GNF" },
    { value: "GTQ", label: "GTQ" },
    { value: "GYD", label: "GYD" },
    { value: "HKD", label: "HKD" },
    { value: "HNL", label: "HNL" },
    { value: "HRK", label: "HRK" },
    { value: "HTG", label: "HTG" },
    { value: "HUF", label: "HUF" },
    { value: "IDR", label: "IDR" },
    { value: "ILS", label: "ILS" },
    { value: "IMP", label: "IMP" },
    { value: "INR", label: "INR" },
    { value: "IQD", label: "IQD" },
    { value: "IRR", label: "IRR" },
    { value: "ISK", label: "ISK" },
    { value: "JEP", label: "JEP" },
    { value: "JMD", label: "JMD" },
    { value: "JOD", label: "JOD" },
    { value: "JPY", label: "JPY" },
    { value: "KES", label: "KES" },
    { value: "KGS", label: "KGS" },
    { value: "KHR", label: "KHR" },
    { value: "KMF", label: "KMF" },
    { value: "KPW", label: "KPW" },
    { value: "KRW", label: "KRW" },
    { value: "KWD", label: "KWD" },
    { value: "KYD", label: "KYD" },
    { value: "KZT", label: "KZT" },
    { value: "LAK", label: "LAK" },
    { value: "LBP", label: "LBP" },
    { value: "LKR", label: "LKR" },
    { value: "LRD", label: "LRD" },
    { value: "LSL", label: "LSL" },
    { value: "LTL", label: "LTL" },
    { value: "LVL", label: "LVL" },
    { value: "LYD", label: "LYD" },
    { value: "MAD", label: "MAD" },
    { value: "MDL", label: "MDL" },
    { value: "MGA", label: "MGA" },
    { value: "MKD", label: "MKD" },
    { value: "MMK", label: "MMK" },
    { value: "MNT", label: "MNT" },
    { value: "MOP", label: "MOP" },
    { value: "MRO", label: "MRO" },
    { value: "MUR", label: "MUR" },
    { value: "MVR", label: "MVR" },
    { value: "MWK", label: "MWK" },
    { value: "MXN", label: "MXN" },
    { value: "MYR", label: "MYR" },
    { value: "MZN", label: "MZN" },
    { value: "NAD", label: "NAD" },
    { value: "NGN", label: "NGN" },
    { value: "NIO", label: "NIO" },
    { value: "NOK", label: "NOK" },
    { value: "NPR", label: "NPR" },
    { value: "NZD", label: "NZD" },
    { value: "OMR", label: "OMR" },
    { value: "PAB", label: "PAB" },
    { value: "PEN", label: "PEN" },
    { value: "PGK", label: "PGK" },
    { value: "PHP", label: "PHP" },
    { value: "PKR", label: "PKR" },
    { value: "PLN", label: "PLN" },
    { value: "PYG", label: "PYG" },
    { value: "QAR", label: "QAR" },
    { value: "RON", label: "RON" },
    { value: "RSD", label: "RSD" },
    { value: "RUB", label: "RUB" },
    { value: "RWF", label: "RWF" },
    { value: "SAR", label: "SAR" },
    { value: "SBD", label: "SBD" },
    { value: "SCR", label: "SCR" },
    { value: "SDG", label: "SDG" },
    { value: "SEK", label: "SEK" },
    { value: "SGD", label: "SGD" },
    { value: "SHP", label: "SHP" },
    { value: "SLE", label: "SLE" },
    { value: "SLL", label: "SLL" },
    { value: "SOS", label: "SOS" },
    { value: "SRD", label: "SRD" },
    { value: "STD", label: "STD" },
    { value: "SVC", label: "SVC" },
    { value: "SYP", label: "SYP" },
    { value: "SZL", label: "SZL" },
    { value: "THB", label: "THB" },
    { value: "TJS", label: "TJS" },
    { value: "TMT", label: "TMT" },
    { value: "TND", label: "TND" },
    { value: "TOP", label: "TOP" },
    { value: "TRY", label: "TRY" },
    { value: "TTD", label: "TTD" },
    { value: "TWD", label: "TWD" },
    { value: "TZS", label: "TZS" },
    { value: "UAH", label: "UAH" },
    { value: "UGX", label: "UGX" },
    { value: "USD", label: "USD" },
    { value: "UYU", label: "UYU" },
    { value: "UZS", label: "UZS" },
    { value: "VEF", label: "VEF" },
    { value: "VES", label: "VES" },
    { value: "VND", label: "VND" },
    { value: "VUV", label: "VUV" },
    { value: "WST", label: "WST" },
    { value: "XAF", label: "XAF" },
    { value: "XAG", label: "XAG" },
    { value: "XAU", label: "XAU" },
    { value: "XCD", label: "XCD" },
    { value: "XDR", label: "XDR" },
    { value: "XOF", label: "XOF" },
    { value: "XPF", label: "XPF" },
    { value: "YER", label: "YER" },
    { value: "ZAR", label: "ZAR" },
    { value: "ZMK", label: "ZMK" },
    { value: "ZMW", label: "ZMW" },
    { value: "ZWL", label: "ZWL" },
  ];
  const [amount, setAmount] = useState<string>("");
  const [fromCurrency, setFromCurrency] = useState<string>(currencies[0].value);
  const [toCurrency, setToCurrency] = useState<string>(currencies[1].value);
  const [convertedAmount, setConvertedAmount] = useState<string>("");
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [moved, setMoved] = useState<boolean>(false);
  const [exchangeList, setExchangeList] = useState<IExchangeItem[]>([]);

  function fetchCurrencies() {
    if (amount) {
      setIsFetching(() => true);
      setErrorMessage("");
      setIsEmpty(false);
      axios
        .get(
          moved
            ? `https://api.apilayer.com/exchangerates_data/convert?to=${fromCurrency}&from=${toCurrency}&amount=${amount}`
            : `https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`,
          {
            headers: {
              apikey: "yjOPFmRND5OiQ6kyQslKPlXeBiZkBWTH",
            },
          }
        )
        .then((res: AxiosResponse) => {
          console.log(res);
          setConvertedAmount(res.data.result.toFixed(2));
          setIsFetching(() => false);
          moved
            ? setExchangeList([
                ...exchangeList,
                {
                  id: Date.now(),
                  amount: +amount,
                  fromCurrency: toCurrency,
                  toCurrency: fromCurrency,
                  convertedAmount: +res.data.result.toFixed(2),
                },
              ])
            : setExchangeList([
                ...exchangeList,
                {
                  id: Date.now(),
                  amount: +amount,
                  fromCurrency: fromCurrency,
                  toCurrency: toCurrency,
                  convertedAmount: +res.data.result.toFixed(2),
                },
              ]);
        })
        .catch((error: AxiosError) => {
          setErrorMessage("Error: " + error.message);
          setIsFetching(() => false);
        });
    } else {
      setIsEmpty(true);
    }
  }

  function swapCurrencies() {
    if (amount) {
      setConvertedAmount("");
      setMoved(!moved);
      setIsFetching(() => true);
      setErrorMessage("");
      setIsEmpty(false);
      axios
        .get(
          !moved
            ? `https://api.apilayer.com/exchangerates_data/convert?to=${fromCurrency}&from=${toCurrency}&amount=${amount}`
            : `https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`,
          {
            headers: {
              apikey: "yjOPFmRND5OiQ6kyQslKPlXeBiZkBWTH",
            },
          }
        )
        .then((res: AxiosResponse) => {
          console.log(res);
          setConvertedAmount(res.data.result.toFixed(2));
          setIsFetching(() => false);
          !moved
            ? setExchangeList([
                ...exchangeList,
                {
                  id: Date.now(),
                  amount: +amount,
                  fromCurrency: toCurrency,
                  toCurrency: fromCurrency,
                  convertedAmount: +res.data.result.toFixed(2),
                },
              ])
            : setExchangeList([
                ...exchangeList,
                {
                  id: Date.now(),
                  amount: +amount,
                  fromCurrency: fromCurrency,
                  toCurrency: toCurrency,
                  convertedAmount: +res.data.result.toFixed(2),
                },
              ]);
        })
        .catch((error: AxiosError) => {
          setErrorMessage("Error: " + error.message);
          setIsFetching(() => false);
        });
    } else {
      setIsEmpty(true);
    }
  }

  return (
    <div className="App bg-gray-600 gap-28">
      <div className="converter-body shadow-2xl">
        <h2 className="font-bold text-lg mb-8">Currency converter</h2>
        <label htmlFor="amount" className="block text-xs text-left font-medium">
          {isEmpty ? (
            <span className="text-red-600">Amount can't be empty!</span>
          ) : (
            "Enter amount"
          )}
        </label>
        <AmountInput
          isEmpty={isEmpty}
          value={amount}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") fetchCurrencies();
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setAmount(e.target.value);
            setIsEmpty(false);
            setConvertedAmount("");
          }}
        />
        <div className="flex justify-between mt-3">
          <div>
            <label
              htmlFor="from"
              className="block text-xs text-left font-medium"
            >
              From
            </label>
            <CustomSelect
              name="from"
              moved={moved}
              movedData="move-to-right"
              defaultValue={currencies[0]}
              options={currencies}
              onChange={(option: ICurrency) => {
                setFromCurrency(option.value);
                setConvertedAmount("");
              }}
            />
          </div>
          <button
            className="mt-5 w-7 h-7 mx-1 px-1 rounded hover:bg-gray-200 transition duration-200"
            onClick={swapCurrencies}
          >
            <img src={swap} alt="" />
          </button>
          <div>
            <label
              htmlFor="currency"
              className="block text-xs text-left font-medium"
            >
              To
            </label>
            <CustomSelect
              name="to"
              moved={moved}
              movedData="move-to-left"
              defaultValue={currencies[1]}
              options={currencies}
              onChange={(option: ICurrency) => {
                setToCurrency(option.value);
                setConvertedAmount("");
              }}
            />
          </div>
        </div>
        <div className="text-left max-h-5 h-full text-xs mt-3 transition duration-200">
          {convertedAmount ? (
            <div>
              {moved
                ? `${amount} ${toCurrency} = ${convertedAmount} ${fromCurrency}`
                : `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`}
            </div>
          ) : (
            <div className="text-red-600">{errorMessage}</div>
          )}
        </div>
        <button
          onClick={fetchCurrencies}
          className="justify-self-end flex justify-center mt-5 items-center text-sm rounded bg-sky-700 hover:bg-sky-800 transition duration-200 text-white h-11 w-full"
        >
          {isFetching ? <Loader /> : "Get Exchange Rate"}
        </button>
      </div>
      <div className="converter-body shadow-2xl">
        <h2 className="font-bold text-lg mb-4">Exchange history</h2>
        <ul className="overflow-scroll h-56 border border-gray-400 rounded custom-shadow">
          {exchangeList.map((exchangeItem: IExchangeItem) => {
            return (
              <ExchangeItem key={exchangeItem.id} exchangeItem={exchangeItem} />
            );
          })}
          <button className="block w-11/12 text-sm h-7 bg-red-700 hover:bg-red-800 transition duration-200 text-white m-2 border rounded">
            Clear history
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Exchange;
