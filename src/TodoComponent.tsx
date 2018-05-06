import * as React from 'react';
import { Dispatch } from 'redux';
import { addTodo } from './action';
import { ITodoState } from './reducer';

interface IProps extends ITodoState {
  dispatch: Dispatch<any>;
}

interface IState {
  text: string;
}

/* tslint:disable:jsx-no-lambda */
export default class extends React.Component<IProps, IState> {
  
  constructor(props: IProps) {
    super(props);

    this.state = {
      text: ''
    }
  }

  public addTodo = () => {
    this.props.dispatch(addTodo(this.state.text))
  }

  public renderTodoList = () => (
    this.props.tasks.map((task) => (<li key={task.id.toString()}>{task.text}</li>))
  )

  public render() {
    return(
      <section style={{width: '500px', margin: '0 auto'}}>
        <h1>MY TODO LIST</h1>
        <input 
          type="text"
          value={this.state.text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({text: e.currentTarget.value})
          }}
        />
        <button onClick={() => { this.addTodo() }}>Add Todo</button>      
        <ul>
          {this.renderTodoList()}
        </ul>
      </section>
    )

  }
}
