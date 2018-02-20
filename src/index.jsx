import { createStore } from 'redux';
import toDoListReducer from './reducers/to-do-list-reducer';

const store = createStore(toDoListReducer);

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component/>
      </Provider>
    </HashRouter>,
    document.getElementById('react-app-root')
  );
};
