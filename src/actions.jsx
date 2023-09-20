// actions.js
export const addItem = (item) => ({
    type: 'ADD_ITEM',
    payload: item,
  });
  
  export const editItem = (item) => ({
    type: 'EDIT_ITEM',
    payload: item,
  });
  
  export const deleteItem = (itemId) => ({
    type: 'DELETE_ITEM',
    payload: itemId,
  });
  