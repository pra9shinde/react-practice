import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from './store/actions';

const SetCounter = () => {
  const countRedux = useSelector((state) => state.count);
  const [count, setCount] = useState(countRedux);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(countRedux);
  }, [countRedux]);

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // setCount(event.target.value);
          dispatch(set(count));
          setCount(count);
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <input type="submit" />
      </form>
    </section>
  );
};

export default SetCounter;
