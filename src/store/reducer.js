const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      counter: counter + action.value,
    };
  }
  if (action.type === 'ADD') {
    return {
      ...state,
      counter: state.counter + action.val,
    };
  }
  if (action.type === 'SUBTRACT') {
    return {
      ...state,
      counter: state.counter - action.val,
    };
  }
  if (action.type === 'DELETE_RESULT') {
    //how to delete data from an array immutably
    const id = 1;
    const newArray = [...state.results];
    newArray.splice(id, 1);
    return {
      ...state,
      results: newArray,
    };
  }
  return state;
};

export default reducer;
