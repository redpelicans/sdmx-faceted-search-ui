export const createStore = (reducer, initialState) => {
  let state = initialState;
  const listeners = [];
  const getState = () => state;
  const subscribe = cb => listeners.push(cb);
  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(cb => cb(state));
    return action;
  };
  return { getState, dispatch, subscribe };
};
