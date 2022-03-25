import { useSelector } from 'react-redux';
import { useActions } from './useActions';
import { increment, decrement, set } from '../store/actions';

const useCounter = () => {
  const count = useSelector((state) => state.count);
  const actions = useActions({ increment, decrement, set });
  return { count, ...actions };
};

export { useCounter };
