export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_ITEM':
    const { chore, description, rating, id, completed } = action;
    let newState = Object.assign({}, state.mastertoDoList, {
      [id]: {
        chore: chore,
        description: description,
        rating: rating,
        completed: false,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
