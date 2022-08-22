import { SET_TODO_INPUT, ADD_TODO, DELE_TODO, EDIT_TODO } from './constants';

const initState = {
  todos: [],
  todoInput: '',
  // counter: 2,
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO: {
      // const newCounter = state.counter + 1;
      // const newTodo = {
      //   id: newCounter,
      //   text: action.text,
      // };
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case DELE_TODO:
      const newTodos = [...state.todos];
      newTodos.splice(action.payload, 1);
      return {
        ...state,
        todos: newTodos,
      };
    case EDIT_TODO:
      const newTodo = [...state.todos];
      newTodo.findIndex((item) => item.id === action.payload.id);
      return {
        ...state,
        todos: newTodo,
      };
    default:
      throw new Error('Invalid action.');
  }
}

export { initState };
export default reducer;
