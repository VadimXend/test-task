export const addAction = data => {
  return {
    type: "ADD_ACTION",
    payload: data
  };
};

export const removeAction = id => {
  return {
    type: "REMOVE_ACTION",
    payload: id
  };
};

export const loadActions = data => {
  return {
    type: "LOAD_ACTIONS",
    payload: data
  };
};

export const sortActions = head => {
  return {
    type: "SORT_ACTIONS",
    payload: head
  };
};
