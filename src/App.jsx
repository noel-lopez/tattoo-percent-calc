import { useState } from 'react'
import Keypads from './components/Keypads';
import { useEffect } from 'react';

function App() {
  const [totalCost, setTotalCost] = useState("")

  useEffect(() => {
    const handleKeyPress = (event) => {
      const keyCode = event.keyCode || event.which;

      if ((keyCode >= 48 && keyCode <= 57) || // Números del 0 al 9
          (keyCode >= 96 && keyCode <= 105) || // Números del teclado numérico
          keyCode === 27 || // Escape
          keyCode === 8) {  // Backspace
        if (event.key === 'Escape') {
          setTotalCost("")
          return;
        }
        if (event.key === 'Backspace') {
          setTotalCost((prev) => prev.slice(0, prev.length-1))
          return
        }
        setTotalCost((prev) => prev+event.key)
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const formatNumber = (num) => {
    return Number.isInteger(num) ? num : num.toFixed(2);
  }

  const studioMoney = formatNumber(totalCost * 0.3);
  const myMoney = formatNumber(totalCost * 0.7)



  return (
      <div className='flex flex-col items-center gap-5 w-screen h-screen'>
        <h1 className='mt-24 mb-8'>Calculadora 70-30%</h1>
        <h2>Ganancias: {myMoney}€</h2>
        <h2>Estudio: {studioMoney}€</h2>
        <div className='flex gap-5 mt-8'>
          <input
            disabled
            value={totalCost}
            onChange={event => setTotalCost(event.target.value)} 
            type='number' 
            className='w-60 h-16 rounded-xl pl-10 text-4xl'
          />
          <button className='rounded text-2xl p-0 w-16' onClick={() => setTotalCost("")}>♻</button>
        </div>
        <Keypads setNumber={setTotalCost} />
      </div>
  )
}

export default App
