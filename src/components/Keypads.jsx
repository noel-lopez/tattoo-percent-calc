const Keypads = ({setNumber}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-4">
        <button className="text-2xl w-24 h-24 p-0" onClick={() => setNumber((prev) => prev+1)}>1</button>
        <button className="text-2xl w-24 h-24 p-0" onClick={() => setNumber((prev) => prev+2)}>2</button>
        <button className="text-2xl w-24 h-24 p-0" onClick={() => setNumber((prev) => prev+3)}>3</button>
      </div>
      <div className="flex gap-4">
        <button className="text-2xl w-24 h-24 p-0" onClick={() => setNumber((prev) => prev+4)}>4</button>
        <button className="text-2xl w-24 h-24 p-0" onClick={() => setNumber((prev) => prev+5)}>5</button>
        <button className="text-2xl w-24 h-24 p-0" onClick={() => setNumber((prev) => prev+6)}>6</button>
      </div>
      <div className="flex gap-4">
        <button className="text-2xl w-24 h-24 p-0" onClick={() => setNumber((prev) => prev+7)}>7</button>
        <button className="text-2xl w-24 h-24 p-0" onClick={() => setNumber((prev) => prev+8)}>8</button>
        <button className="text-2xl w-24 h-24 p-0" onClick={() => setNumber((prev) => prev+9)}>9</button>
      </div>
      <button className="text-2xl h-24 w-80 p-0" onClick={() => setNumber((prev) => prev+0)}>0</button>
    </div>
  )
}

export default Keypads