import InputDiv from "./InputDiv"
import { useCurrencyInfo } from '../hooks/useCurrencyInfo'
import { useState } from "react"

export default function ConverterDiv() {
  const inState = {
    id: [0, 1],
    currency: ['usd', 'inr'],
    amount: 1,
    label: ['From', 'To'],
    isReversed: false
  }
  const [data, setData] = useState(inState)

  const exchInfo = useCurrencyInfo(data.currency[0])
  const exchAmount = !exchInfo.length ?
    inState.amount : (exchInfo[0][data.currency[1]]) * data.amount
  const curOptions = !exchInfo.length ?
    inState.currency : Object.keys(exchInfo[0])

  const handleClick = () => (
    setData(prev => ({ ...prev, currency: [...prev.currency].reverse(), isReversed: !prev.isReversed }))
  )

  const handleAmountChange = (val) => {
    setData(prev => ({ ...prev, amount: Number(val) }))
  }

  const handleCurTypeChange = (val, id) => {
    setData(prev => ({ ...prev, currency: prev.currency.toSpliced(id, 1, val) }))
  }



  return (
    <div className="border p-5 shadow-lg rounded-xl flex flex-col 
      justify-center items-center gap-0 bg-slate-600 bg-opacity-80">
      <h1 className="text-white mb-5 text-2xl uppercase font-semibold">Currency Exchange</h1>
      <InputDiv
        id={data.id[0]}
        currency={data.currency[0]}
        amount={data.amount}
        label={data.label[0]}
        curOptions={curOptions}
        handleAmountChange={handleAmountChange}
        handleCurTypeChange={handleCurTypeChange} />

      <button onClick={handleClick}
        className="bg-transparent text-white hover:text-gray-300 p-1 my-3 rounded-full shadow-md ring-2 ring-white hover:ring-offset-1 ring-inset-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
        </svg>
      </button>

      <InputDiv
        id={data.id[1]}
        currency={data.currency[1]}
        amount={exchAmount}
        label={data.label[1]}
        curOptions={curOptions}
        handleAmountChange={handleAmountChange}
        handleCurTypeChange={handleCurTypeChange} />
    </div>
  )
}
