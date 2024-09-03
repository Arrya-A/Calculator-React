import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState("")

  const handleClick = (e) => {
    setValue(value + e.target.value);
  };

  return (
    <>
      <div className="row  justify-content-center">
        <div className="col-md-4">
          <h1 className='text-center mt-5'>Calculator</h1>
          <div className='mt-5 shadow rounded p-5' style={{ backgroundColor: 'grey' }}>
            <input id="result" type="text" value={value} style={{ textAlign: 'right' }} className="pe-3" readOnly />

            <div className='buttons'>
              <input className='btn btn-light AC' type="button" value="AC" onClick={e => setValue('')} />
              <input className='btn btn-light operator' type="button" value="⌫" onClick={e => setValue(value.slice(0, -1))} />
              <input className='btn btn-light operator' type="button" value="%" />
              <input className='btn btn-light operator' type="button" value="/" />

              <input className='btn btn-light' type="button" value="7" onClick={handleClick} />
              <input className='btn btn-light' type="button" value="8" onClick={handleClick} />
              <input className='btn btn-light' type="button" value="9" onClick={handleClick} />
              <input className='btn btn-light operator' type="button" value="*" onClick={handleClick} />

              <input className='btn btn-light' type="button" value="4" onClick={handleClick} />
              <input className='btn btn-light' type="button" value="5" onClick={handleClick} />
              <input className='btn btn-light' type="button" value="6" onClick={handleClick} />
              <input className='btn btn-light operator' type="button" value="+" onClick={handleClick} />

              <input className='btn btn-light' type="button" value="1" onClick={handleClick} />
              <input className='btn btn-light' type="button" value="2" onClick={handleClick} />
              <input className='btn btn-light' type="button" value="3" onClick={handleClick} />
              <input className='btn btn-light operator' type="button" value="-" onClick={handleClick} />

              <input className='btn btn-light' type="button" value="0" onClick={handleClick} />
              <input className='btn btn-light' type="button" value="00" onClick={handleClick} />
              <input className='btn btn-light' type="button" value="." onClick={handleClick} />
              <input className='btn btn-warning equals' type="button" value="=" onClick={e => setValue(eval(value))} />

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
