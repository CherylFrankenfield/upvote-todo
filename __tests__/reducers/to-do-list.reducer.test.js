import toDoListReducer from './../../src/reducers/to-do-list-reducer';

describe('toDoListReducer', ()=> {

  let action;
  const sampleItemData = {
    chore: 'Learn React',
    description: 'Practice and document steps',
    rating: 1,
    completed: false,
    id: 0
  };

  test('Should return default state if no action type is recognized', ()=> {
    expect(toDoListReducer({}, {type: null})).toEqual({});
  });

  test('Should successfully add new item to mastertoDoList', () => {
    const { chore, description, rating, id, completed } = sampleItemData;
    action = {
      type: 'ADD_ITEM',
      chore: chore,
      description: description,
      rating: rating,
      completed: false,
      id: id
    };
    expect(toDoListReducer({}, action)).toEqual({
      [id] : {
        chore: chore,
        description: description,
        rating: rating,
        completed: false,
        id: id
      }
    });
  });
});
