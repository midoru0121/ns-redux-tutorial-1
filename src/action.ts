import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory();

export const addTodo = actionCreator<string>(
  'ADD_TODO',
);
