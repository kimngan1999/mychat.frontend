import { useReducer, useRef } from 'react';
import reducer, {initState} from './reducer';
import { setJob, addJob, delJob } from './actions';
import logger from './logger';
// 1. init state

// 2. action

// 3. reducer

// 4. dispatch

function App() {
  const [state, dispatch] = useReducer(logger(reducer), initState)
  const {job, jobs} = state
  const inputRef = useRef()

  const handleSubmit = () =>{
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }
  
  return (
    <div style={{padding: '0 20px'}}>
      <h3>TO DO</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder='Enter todo...'
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((item, index) => (
          <li key={index}>{item} 
          <span onClick={() => {
            dispatch(delJob(index))
          }}>
            &times;
          </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;