import { useId } from "react"

export default function InputDiv({ id, currency, amount, label, curOptions,
  handleAmountChange, handleCurTypeChange }) {
  const id1 = useId()
  const id2 = useId()
  const roundedAmount = (Math.round(Number(amount) * 1000) / 1000)

  return (
    <div className="bg-white rounded-lg p-5 flex gap-10">
      <div className="flex flex-col">
        <label htmlFor={id1} className="text-sm text-left text-slate-600 mb-5 font-bold"
          style={{ color: label === 'From' ? 'blue' : 'red' }}>
          {label}
        </label>
        <input
          type="number" id={id1} onChange={(evt) => handleAmountChange(evt.target.value)}
          placeholder="0" disabled={label === 'To'}
          className="outline-none rounded-lg py-1 text-lg" value={roundedAmount || ''} />
      </div>
      <div className="flex flex-col">
        <label htmlFor={id2}
          className="text-sm mb-5 px-1 text-green-600 font-bold text-right">
          Currency Type
        </label>
        <select name="currencyType" id={id2} value={currency}
          onChange={(evt) => handleCurTypeChange(evt.target.value, id)}
          className="w-full bg-slate-100 text-lg rounded-lg p-1">
          {curOptions.map((opt, idx) => (
            <option
              key={idx}
              value={`${opt}`}
              className="text-lg">
              {opt.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}