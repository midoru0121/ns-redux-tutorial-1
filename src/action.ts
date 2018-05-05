import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory();

export const addTodo = actionCreator<string>(
  'ADD_TODO',
);

// interface IDeleteTodoPayload {
//   id: number
// }

// export const deleteTodo = actionCreator<IDeleteTodoPayload>(
//   'DELETE_TODO',
// );

// interface IUpdateDoneTodoPayload {
//   id: number,
//   isDone: boolean
// }

// export const updateDoneTodo = actionCreator<IUpdateDoneTodoPayload>(
//   'UPDATE_DONE_TODO',
// );