import { useState, useEffect } from "react";
import "../assets/styles/styles.css";
import Select from 'react-select';
import CurInput from "../components/UI/curInput/CurInput";
// import axios from "axios";

export default function Exchange() {
  // const curSet = [
  //   "AED",
  //   "AFN",
  //   "ALL",
  //   "AMD",
  //   "ANG",
  //   "AOA",
  //   "ARS",
  //   "AUD",
  //   "AWG",
  //   "AZN",
  //   "BAM",
  //   "BBD",
  //   "BDT",
  //   "BGN",
  //   "BHD",
  //   "BIF",
  //   "BMD",
  //   "BND",
  //   "BOB",
  //   "BRL",
  //   "BSD",
  //   "BTC",
  //   "BTN",
  //   "BWP",
  //   "BYN",
  //   "BYR",
  //   "BZD",
  //   "CAD",
  //   "CDF",
  //   "CHF",
  //   "CLF",
  //   "CLP",
  //   "CNY",
  //   "COP",
  //   "CRC",
  //   "CUC",
  //   "CUP",
  //   "CVE",
  //   "CZK",
  //   "DJF",
  //   "DKK",
  //   "DOP",
  //   "DZD",
  //   "EGP",
  //   "ERN",
  //   "ETB",
  //   "EUR",
  //   "FJD",
  //   "FKP",
  //   "GBP",
  //   "GEL",
  //   "GGP",
  //   "GHS",
  //   "GIP",
  //   "GMD",
  //   "GNF",
  //   "GTQ",
  //   "GYD",
  //   "HKD",
  //   "HNL",
  //   "HRK",
  //   "HTG",
  //   "HUF",
  //   "IDR",
  //   "ILS",
  //   "IMP",
  //   "INR",
  //   "IQD",
  //   "IRR",
  //   "ISK",
  //   "JEP",
  //   "JMD",
  //   "JOD",
  //   "JPY",
  //   "KES",
  //   "KGS",
  //   "KHR",
  //   "KMF",
  //   "KPW",
  //   "KRW",
  //   "KWD",
  //   "KYD",
  //   "KZT",
  //   "LAK",
  //   "LBP",
  //   "LKR",
  //   "LRD",
  //   "LSL",
  //   "LTL",
  //   "LVL",
  //   "LYD",
  //   "MAD",
  //   "MDL",
  //   "MGA",
  //   "MKD",
  //   "MMK",
  //   "MNT",
  //   "MOP",
  //   "MRO",
  //   "MUR",
  //   "MVR",
  //   "MWK",
  //   "MXN",
  //   "MYR",
  //   "MZN",
  //   "NAD",
  //   "NGN",
  //   "NIO",
  //   "NOK",
  //   "NPR",
  //   "NZD",
  //   "OMR",
  //   "PAB",
  //   "PEN",
  //   "PGK",
  //   "PHP",
  //   "PKR",
  //   "PLN",
  //   "PYG",
  //   "QAR",
  //   "RON",
  //   "RSD",
  //   "RUB",
  //   "RWF",
  //   "SAR",
  //   "SBD",
  //   "SCR",
  //   "SDG",
  //   "SEK",
  //   "SGD",
  //   "SHP",
  //   "SLE",
  //   "SLL",
  //   "SOS",
  //   "SRD",
  //   "STD",
  //   "SVC",
  //   "SYP",
  //   "SZL",
  //   "THB",
  //   "TJS",
  //   "TMT",
  //   "TND",
  //   "TOP",
  //   "TRY",
  //   "TTD",
  //   "TWD",
  //   "TZS",
  //   "UAH",
  //   "UGX",
  //   "USD",
  //   "UYU",
  //   "UZS",
  //   "VEF",
  //   "VES",
  //   "VND",
  //   "VUV",
  //   "WST",
  //   "XAF",
  //   "XAG",
  //   "XAU",
  //   "XCD",
  //   "XDR",
  //   "XOF",
  //   "XPF",
  //   "YER",
  //   "ZAR",
  //   "ZMK",
  //   "ZMW",
  //   "ZWL"
  // ];
  const curSet = [
    { value: "AED", label: 'AED' },
    { value: "AFN", label: 'AFN' },
    { value: "ALL", label: 'ALL' },
    { value: "AMD", label: 'AMD' },
    { value: "ANG", label: 'ANG' },
    { value: "AOA", label: 'AOA' },
    { value: "ARS", label: 'ARS' },
    { value: "AUD", label: 'AUD' },
    { value: "AWG", label: 'AWG' },
    { value: "AZN", label: 'AZN' },
    { value: "BAM", label: 'BAM' },
    { value: "BBD", label: 'BBD' },
    { value: "BDT", label: 'BDT' },
    { value: "BGN", label: 'BGN' },
    { value: "BHD", label: 'BHD' },
    { value: "BIF", label: 'BIF' },
    { value: "BMD", label: 'BMD' },
    { value: "BND", label: 'BND' },
    { value: "BOB", label: 'BOB' },
    { value: "BRL", label: 'BRL' },
    { value: "BSD", label: 'BSD' },
    { value: "BTC", label: 'BTC' },
    { value: "BTN", label: 'BTN' },
    { value: "BWP", label: 'BWP' },
    { value: "BYN", label: 'BYN' },
    { value: "BYR", label: 'BYR' },
    { value: "BZD", label: 'BZD' },
    { value: "CAD", label: 'CAD' },
    { value: "CDF", label: 'CDF' },
    { value: "CHF", label: 'CHF' },
    { value: "CLF", label: 'CLF' },
    { value: "CLP", label: 'CLP' },
    { value: "CNY", label: 'CNY' },
    { value: "COP", label: 'COP' },
    { value: "CRC", label: 'CRC' },
    { value: "CUC", label: 'CUC' },
    { value: "CUP", label: 'CUP' },
    { value: "CVE", label: 'CVE' },
    { value: "CZK", label: 'CZK' },
    { value: "DJF", label: 'DJF' },
    { value: "DKK", label: 'DKK' },
    { value: "DOP", label: 'DOP' },
    { value: "DZD", label: 'DZD' },
    { value: "EGP", label: 'EGP' },
    { value: "ERN", label: 'ERN' },
    { value: "ETB", label: 'ETB' },
    { value: "EUR", label: 'EUR' },
    { value: "FJD", label: 'FJD' },
    { value: "FKP", label: 'FKP' },
    { value: "GBP", label: 'GBP' },
    { value: "GEL", label: 'GEL' },
    { value: "GGP", label: 'GGP' },
    { value: "GHS", label: 'GHS' },
    { value: "GIP", label: 'GIP' },
    { value: "GMD", label: 'GMD' },
    { value: "GNF", label: 'GNF' },
    { value: "GTQ", label: 'GTQ' },
    { value: "GYD", label: 'GYD' },
    { value: "HKD", label: 'HKD' },
    { value: "HNL", label: 'HNL' },
    { value: "HRK", label: 'HRK' },
    { value: "HTG", label: 'HTG' },
    { value: "HUF", label: 'HUF' },
    { value: "IDR", label: 'IDR' },
    { value: "ILS", label: 'ILS' },
    { value: "IMP", label: 'IMP' },
    { value: "INR", label: 'INR' },
    { value: "IQD", label: 'IQD' },
    { value: "IRR", label: 'IRR' },
    { value: "ISK", label: 'ISK' },
    { value: "JEP", label: 'JEP' },
    { value: "JMD", label: 'JMD' },
    { value: "JOD", label: 'JOD' },
    { value: "JPY", label: 'JPY' },
    { value: "KES", label: 'KES' },
    { value: "KGS", label: 'KGS' },
    { value: "KHR", label: 'KHR' },
    { value: "KMF", label: 'KMF' },
    { value: "KPW", label: 'KPW' },
    { value: "KRW", label: 'KRW' },
    { value: "KWD", label: 'KWD' },
    { value: "KYD", label: 'KYD' },
    { value: "KZT", label: 'KZT' },
    { value: "LAK", label: 'LAK' },
    { value: "LBP", label: 'LBP' },
    { value: "LKR", label: 'LKR' },
    { value: "LRD", label: 'LRD' },
    { value: "LSL", label: 'LSL' },
    { value: "LTL", label: 'LTL' },
    { value: "LVL", label: 'LVL' },
    { value: "LYD", label: 'LYD' },
    { value: "MAD", label: 'MAD' },
    { value: "MDL", label: 'MDL' },
    { value: "MGA", label: 'MGA' },
    { value: "MKD", label: 'MKD' },
    { value: "MMK", label: 'MMK' },
    { value: "MNT", label: 'MNT' },
    { value: "MOP", label: 'MOP' },
    { value: "MRO", label: 'MRO' },
    { value: "MUR", label: 'MUR' },
    { value: "MVR", label: 'MVR' },
    { value: "MWK", label: 'MWK' },
    { value: "MXN", label: 'MXN' },
    { value: "MYR", label: 'MYR' },
    { value: "MZN", label: 'MZN' },
    { value: "NAD", label: 'NAD' },
    { value: "NGN", label: 'NGN' },
    { value: "NIO", label: 'NIO' },
    { value: "NOK", label: 'NOK' },
    { value: "NPR", label: 'NPR' },
    { value: "NZD", label: 'NZD' },
    { value: "OMR", label: 'OMR' },
    { value: "PAB", label: 'PAB' },
    { value: "PEN", label: 'PEN' },
    { value: "PGK", label: 'PGK' },
    { value: "PHP", label: 'PHP' },
    { value: "PKR", label: 'PKR' },
    { value: "PLN", label: 'PLN' },
    { value: "PYG", label: 'PYG' },
    { value: "QAR", label: 'QAR' },
    { value: "RON", label: 'RON' },
    { value: "RSD", label: 'RSD' },
    { value: "RUB", label: 'RUB' },
    { value: "RWF", label: 'RWF' },
    { value: "SAR", label: 'SAR' },
    { value: "SBD", label: 'SBD' },
    { value: "SCR", label: 'SCR' },
    { value: "SDG", label: 'SDG' },
    { value: "SEK", label: 'SEK' },
    { value: "SGD", label: 'SGD' },
    { value: "SHP", label: 'SHP' },
    { value: "SLE", label: 'SLE' },
    { value: "SLL", label: 'SLL' },
    { value: "SOS", label: 'SOS' },
    { value: "SRD", label: 'SRD' },
    { value: "STD", label: 'STD' },
    { value: "SVC", label: 'SVC' },
    { value: "SYP", label: 'SYP' },
    { value: "SZL", label: 'SZL' },
    { value: "THB", label: 'THB' },
    { value: "TJS", label: 'TJS' },
    { value: "TMT", label: 'TMT' },
    { value: "TND", label: 'TND' },
    { value: "TOP", label: 'TOP' },
    { value: "TRY", label: 'TRY' },
    { value: "TTD", label: 'TTD' },
    { value: "TWD", label: 'TWD' },
    { value: "TZS", label: 'TZS' },
    { value: "UAH", label: 'UAH' },
    { value: "UGX", label: 'UGX' },
    { value: "USD", label: 'USD' },
    { value: "UYU", label: 'UYU' },
    { value: "UZS", label: 'UZS' },
    { value: "VEF", label: 'VEF' },
    { value: "VES", label: 'VES' },
    { value: "VND", label: 'VND' },
    { value: "VUV", label: 'VUV' },
    { value: "WST", label: 'WST' },
    { value: "XAF", label: 'XAF' },
    { value: "XAG", label: 'XAG' },
    { value: "XAU", label: 'XAU' },
    { value: "XCD", label: 'XCD' },
    { value: "XDR", label: 'XDR' },
    { value: "XOF", label: 'XOF' },
    { value: "XPF", label: 'XPF' },
    { value: "YER", label: 'YER' },
    { value: "ZAR", label: 'ZAR' },
    { value: "ZMK", label: 'ZMK' },
    { value: "ZMW", label: 'ZMW' },
    { value: "ZWL", label: 'ZWL' }
  ];
  let [from, setFrom] = useState<string | null>(null);
  let [to, setTo] = useState<string | null>(null);
  let [amount, setAmount] = useState(1);
  let [result, setResult] = useState('');
  let [isFetching, setIsFetching] = useState(false);


  async function fetchCurrencies() {
    setIsFetching(() => true)
    var myHeaders = new Headers();
    myHeaders.append("apikey", "yjOPFmRND5OiQ6kyQslKPlXeBiZkBWTH");
    
    // var requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    //   headers: myHeaders
    // };
    
    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, {
      method: "GET",
      redirect: "follow",
      headers: myHeaders
    })
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        setResult(json.result.toFixed(2))
        setIsFetching(() => false)
      })
      .catch((error) => {
        console.log("error", error)
        setIsFetching(() => false)
    })
  }

  useEffect(() => {
    if (from != null && to != null) {
      fetchCurrencies()
    }
  }, [from, to])
  
  return (
    <div className="App bg-gray-600">
        <div className="container-exchange">
          <div className="data initial-data">
            <label htmlFor="price" className="block text-md font-medium text-white-700">
              Price
            </label>
            <CurInput 
              type="text"
              name="price"
              id="price"
              value={amount}
              onKeyDown={(e: any) => {if (e.key === 'Enter') fetchCurrencies()}}
              onChange={(e: any) => {setAmount(e.target.value)}}
              />
            <div>
            <label htmlFor="currency" className="block text-md font-medium text-white-700">
              Currency
            </label>
            <Select name="currency" options={curSet} onChange={e => {setFrom(e!.value)}} className="text-gray-700" />
            </div>
          </div>
          <div className="send flex justify-center items-center">
            <button onClick={fetchCurrencies} className={isFetching ?  "hidden" : "fetch m-2"}></button>
            <div role="status" className={isFetching ?  "loader" : "hidden"}>
              <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-100" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <div className="data output-data">
            <label htmlFor="price" className="block text-md font-medium text-white-700">
              Price
            </label>
              <CurInput
                type="text"
                name="price"
                id="price"
                value={result}
                onChange={(e: any) => setResult(e.target.value)}
              />
            <div>
            <label htmlFor="currency" className="block text-md font-medium text-white-700">
              Currency
            </label>
            <Select name="currency" options={curSet} onChange={e => {setTo(e!.value)}} className="text-gray-700" />
            </div>
          </div>
      </div>
    </div>
  );
}
