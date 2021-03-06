import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import toDoListReducer from './reducers/to-do-list-reducer';
import {Provider} from 'react-redux';

const store = createStore(toDoListReducer);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

const render = (Component) => {
  ReactDOM.render(
      <Provider store={store}>
        <Component/>
      </Provider>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App);
    });
}
/*eslint-enable */
