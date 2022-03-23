import { DECREMENT, INCREMENT, SET } from './actions';

const initialState = { count: 100 };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case SET:
      return { count: parseInt(action.payload) };
    default:
      return state;
  }
};
