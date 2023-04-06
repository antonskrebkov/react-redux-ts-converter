import { useState } from "react";
import CustomSelect from "../components/UI/select/CustomSelect";
import AmountInput from "../components/UI/amountInput/AmountInput";
import Loader from "../components/UI/loader/Loader";
import swap from "../assets/images/swap.svg";
import ICurrency from "../interfaces/ICurrency";
import IExchangeItem from "../interfaces/IExchangeItem";
import { ratesAPI } from "../services/RatesService";
import { exchangeAPI } from "../services/ExchangeService";

const Exchange: React.FC = () => {
  const [
    getConvertedAmount,
    { isLoading: isAmountLoading, isError: isAmountError },
  ] = ratesAPI.useGetConvertedAmountMutation();
  const { data: currencies } = exchangeAPI.useGetCurrenciesQuery("");
  const [addExchangeItem] = exchangeAPI.useAddExchangeItemMutation();

  const [amount, setAmount] = useState<string>("");
  const [fromCurrency, setFromCurrency] = useState<string>("AED");
  const [toCurrency, setToCurrency] = useState<string>("AFN");
  const [convertedAmount, setConvertedAmount] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [moved, setMoved] = useState<boolean>(false);

  const handleGetConvertedAmount = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const target = event.target as HTMLButtonElement;
    if (amount) {
      if (target.value !== "GET") {
        setConvertedAmount("");
        setMoved(!moved);
        setErrorMessage("");
        setIsEmpty(false);
      }
      await getConvertedAmount(
        target.value === "GET"
          ? moved
            ? {
                to: fromCurrency,
                from: toCurrency,
                amount,
              }
            : {
                to: toCurrency,
                from: fromCurrency,
                amount,
              }
          : !moved
          ? {
              to: fromCurrency,
              from: toCurrency,
              amount,
            }
          : {
              to: toCurrency,
              from: fromCurrency,
              amount,
            }
      )
        .unwrap()
        .then((res) => {
          setConvertedAmount(res.result.toFixed(2));
          addExchangeItem({
            timestamp: Date.now(),
            rate: +res.info.rate.toFixed(2),
            amount: res.query.amount,
            fromCurrency: res.query.from,
            toCurrency: res.query.to,
            convertedAmount: +res.result.toFixed(2),
          } as IExchangeItem);
        })
        .catch((e) => {
          return e.data.message
            ? setErrorMessage("Error: " + e.data.message)
            : setErrorMessage("Error: " + e.data.error.message);
        });
    } else {
      setIsEmpty(true);
    }
  };

  return (
    <div className="App bg-gray-600">
      <div className="item-body scale-125 sm:scale-150 shadow-2xl">
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
              defaultValue={{ value: "AED", label: "AED" }}
              options={currencies && currencies}
              onChange={(option: ICurrency) => {
                setFromCurrency(option.value);
                setConvertedAmount("");
              }}
            />
          </div>
          <button
            className="mt-5 w-7 h-7 mx-1 px-1 rounded hover:bg-gray-200 transition duration-200"
            onClick={(event) => handleGetConvertedAmount(event)}
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
              defaultValue={{ value: "AFN", label: "AFN" }}
              options={currencies && currencies}
              onChange={(option: ICurrency) => {
                setToCurrency(option.value);
                setConvertedAmount("");
              }}
            />
          </div>
        </div>
        <div className="text-left max-h-5 h-full text-xs mt-3 transition duration-200">
          {convertedAmount && (
            <div>
              {moved
                ? `${amount} ${toCurrency} = ${convertedAmount} ${fromCurrency}`
                : `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`}
            </div>
          )}
          {isAmountError && (
            <div className="text-xxs text-red-600">{errorMessage}</div>
          )}
        </div>
        <button
          onClick={(event) => handleGetConvertedAmount(event)}
          value="GET"
          className="justify-self-end flex justify-center mt-5 items-center text-sm rounded bg-sky-700 hover:bg-sky-800 transition duration-200 text-white h-11 w-full"
        >
          {isAmountLoading ? (
            <Loader color="fill-gray-100" />
          ) : (
            "Get Exchange Rate"
          )}
        </button>
      </div>
    </div>
  );
};

export default Exchange;
