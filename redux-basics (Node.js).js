//redux created with node (no React code)

const redux = require('redux');
const createStore = redux.createStore;

//we need an initial state
const initialState = {
  counter: 0,
};

//Reducer
//we only have one reducer, it is the only thing capable of updating the state
//old state
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + 10,
    };
  }
  return state; //new state
};

//Store
//we need to pass the reducer here
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});

//Dispatch Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());
