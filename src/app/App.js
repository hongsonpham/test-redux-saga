import logo from '../logo.svg';
import './App.css';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incrementAction, decrementAction, increateByValueAction } from '../store/counter/actionsCreator';

const App = () => {

  const [inputValue, setInputValue] = useState(1);

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counterReducer.counter || 0);
  const handleChange = event => {
    setInputValue(+event.target.value);
  }

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{counter}</h1>
        <div>
          <input type="number" className="form-control" onChange={handleChange} />
          <button type="button" className="btn btn-outline-info btn-lg"
            onClick={() => dispatch(decrementAction())}>Giảm 1</button>

          <button type="button" className="btn btn-outline-success btn-lg m-3"
            onClick={() => dispatch(incrementAction())}>Tăng 1</button>

          <button type="button" className="btn btn-outline-success btn-lg"
            onClick={() => dispatch(increateByValueAction(inputValue))}>Tăng</button>

        </div>
      </header>
    </div>

  );
}

export default App;
