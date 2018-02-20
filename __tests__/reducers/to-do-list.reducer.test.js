import toDoListReducer from './../../src/reducers/to-do-list-reducer';

describe('toDoListReducer', ()=> {
  test('Should return default state if no action type is recognized', ()=> {
    expect(toDoListReducer({}, {type: null})).toEqual({});
  });
});
