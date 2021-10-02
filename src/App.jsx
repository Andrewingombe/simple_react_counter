import { useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';
import './App.scss';

function App() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter__wrapper">
      <h1 className="counter__heading">React Counter Using redux</h1>
      <h3 className="counter">{counter}</h3>
      <button className="increase" onClick={() => dispatch(increment())}>Increase +</button>
      <button className="decrease" onClick={() => dispatch(decrement())}>Decrease -</button>
    </div>
  );
}

export default App;
