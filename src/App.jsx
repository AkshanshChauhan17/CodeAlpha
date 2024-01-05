import { useState } from 'react'
import './App.css'
import CalculateAge from './component/age_calculator';

function App() {
  const [date, setDate] = useState();
  const [cb, setCb] = useState(false);
  return (
    <>
      {cb ? <CalculateAge date={date} cb={setCb}/> :
      <div className="input-section">
        <form>
          <fieldset>
            <legend>DOB</legend>
            <input type="date" onChange={(e)=>setDate(e.target.value)} />
          </fieldset>
        </form>
        <br />
        {
          date!==null ? 
          <div>
            <hr />
            <b>Selected Date: </b> {date}
            <hr />
            <br />
          </div>
          :
          null
        }
        <button onClick={()=>setCb(true)}>Calculate</button>
      </div>
    }
    </>
  )
}

export default App
