export default function PassGen({ config, password, passwordRef, handleClick, handlePassword, handleConfig }) {
  return (
    <div className="flex flex-col justify-center items-center p-5 bg-gray-700 rounded-lg gap-3 shadow-xl">
      <div className="flex w-full">
        <input
          type="text"
          readOnly
          value={password}
          onChange={handlePassword}
          ref={passwordRef}
          className="rounded-s-lg p-2 outline-none flex-1" />
        <button
          onClick={handleClick}
          className="text-white bg-blue-800 px-3 rounded-e-lg">
          copy
        </button>
      </div>

      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <input
            id="range"
            type="range"
            name="length"
            min={8}
            max={16}
            value={config.length}
            onChange={handleConfig}
            className="" />
          <label htmlFor="range" className="text-white">
            length({config.length < 10 ? `0${config.length}` : config.length})
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            id="numbers"
            type="checkbox"
            name="numbers"
            onChange={handleConfig}
            className=""
            defaultChecked={config.symbols} />
          <label htmlFor="numbers" className="text-white">Numbers</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            id="symbols"
            type="checkbox"
            name="symbols"
            onChange={handleConfig}
            className=""
            defaultChecked={config.symbols} />
          <label htmlFor="symbols" className="text-white">Symbols</label>
        </div>
      </div>
    </div>
  )
}