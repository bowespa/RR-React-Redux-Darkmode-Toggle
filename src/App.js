import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { inputId, increment, decrement, clearData, fetchData } from './features/dataSlice'

function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

  const renderImg = () => {
    if (data.apiData) {
      return <img style={{ 'width': '100vw' }} src={data.apiData.primaryImage} alt={data.apiData.title} />
    } else {
      return <p>image here</p>
    }
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => { dispatch(fetchData()) }}>Thunk!</button>
        <button onClick={() => { dispatch(clearData()) }}>Clear</button>
        <button onClick={() => { dispatch(increment()) }}>Next</button>
        <button onClick={() => { dispatch(decrement()) }}>Back</button>
      </div>
      <input value={data.objectId} onChange={(e) => { dispatch(inputId(Number(e.target.value))) }} />
      <div>
        {data.objectId}
        {renderImg()}
      </div>
    </div>
  );
}

export default App;
