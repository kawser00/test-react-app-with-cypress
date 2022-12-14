import React from 'react';
import cancelImage from '../assets/images/cancel.png';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggled } from '../redux/todos/actions';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const { id, text, completed } = todo;

  const handleStatusChange = (todoId) => {
    dispatch(toggled(todoId))
  }

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId))
  }

  return (
    <div
      className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
      data-cy={`todo-item-${text.toLowerCase().split(' ').join('-')}`}
    >
      <div
        className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${completed && 'border-green-500 focus-within:border-green-500'}`}
      >
        <input
          type="checkbox"
          className="opacity-0 absolute rounded-full"
          onChange={() => handleStatusChange(id)}
        />
        {completed && (
          <svg
            className="fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
            id='check-icon'
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>
      <div id="todo-item" className={`select-none flex-1 ${completed && 'line-through'}`}>
        {text}
      </div>
      <img
        src={cancelImage}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
        onClick={()=> handleDelete(id)}
        data-cy='delete-button'
      />
    </div>
  );
};

export default Todo;