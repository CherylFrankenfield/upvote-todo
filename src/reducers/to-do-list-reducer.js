export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_ITEM':
    const { chore, description, rating, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        chore: chore,
        description: description,
        rating: rating,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
