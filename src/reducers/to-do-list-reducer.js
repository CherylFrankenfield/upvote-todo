const test = {
  1: {
    chore: 'chore',
    description: 'homework',
    rating: 'rating',
    completed: false,
    id: '1'
  },
  2: {
    chore: 'dishes',
    description: 'dishes',
    rating: 'rating',
    completed: false,
    id: '2'
  }
}
export default (state = test, action) => {
  switch (action.type) {
  case 'ADD_ITEM':
    const { chore, description, rating, id, completed } = action;
    let newState = Object.assign({}, state, {
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
