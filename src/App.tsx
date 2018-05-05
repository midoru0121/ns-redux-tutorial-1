import * as React from 'react';
import { Provider } from 'react-redux'

import './App.css';
import { buildTodoStore } from './store';
import TodoContainer from './TodoContainer';

class App extends React.Component {
  public render() {
    return (
      <Provider store={buildTodoStore()}>
        <TodoContainer/>
      </Provider>
    );
  }
}

export default App;
