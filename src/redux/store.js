const store = (state = [], action) => {
  switch (action.type) {
    case "ADD_ACTION":
      return [...state, ...action.payload];

    case "REMOVE_ACTION":
      return state.filter(value => value.id !== action.payload);

    case "LOAD_ACTIONS":
      return action.payload;

    case "SORT_ACTIONS":
      return [
        ...state.sort((a, b) => {
          let x = a[action.payload].toLowerCase();
          let y = b[action.payload].toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        })
      ];

    default:
      return state;
  }
};

export default store;
