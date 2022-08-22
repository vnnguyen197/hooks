import './App.css';
import { useStore, actions } from './store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInput) {
      dispatch(actions.addTodo(todoInput));
      dispatch(actions.setTodoInput(''));
      inputRef.current.focus();
    } else {
      dispatch(actions.editTodo(todoInput));
    }
  };

  const handleEdit = () => {
    dispatch(actions.editTodo(todoInput));
  };

  return (
    <div className='App'>
      <div>
        <h1> Demo Todo List </h1>
        <form className='form-container' onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            value={todoInput}
            placeholder='Add todo...'
            onChange={(e) => {
              dispatch(actions.setTodoInput(e.target.value));
            }}
          />
          <button className='btn-add'>Add</button>
        </form>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              className='btn-delete'
              onClick={() => dispatch(actions.deleTodo(index))}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className='btn-edit' onClick={handleEdit}>
              <FontAwesomeIcon icon={faPencil} />
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
