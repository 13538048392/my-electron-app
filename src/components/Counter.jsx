import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../store';

export default function Counter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h2>Redux 计数器</h2>
      <p>当前值：<strong>{value}</strong></p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>重置</button>
    </div>
  );
}
