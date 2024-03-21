import { useState, useEffect } from "react";
import axios from 'axios'

const useCurrencyInfo = (cur) => {
  const [data, setData] = useState({
    base_currency: cur,
    currencyOptions: [],
  })

  useEffect(() => {
    async function fetchData(cur) {
      try {
        const res = await axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${cur}.json`)
        setData(prev => ({ base_currency: cur, currencyOptions: [res.data[cur]] }))
      } catch (err) {
        console.log(err)
      }
    }
    fetchData(cur)
  }, [cur])

  return data.currencyOptions
}

export { useCurrencyInfo }