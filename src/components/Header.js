import React, { useState } from 'react';
import noteImage from '../assets/images/notes.png';
import tickImage from '../assets/images/double-tick.png';
import plusImage from '../assets/images/plus.png';
import { useDispatch } from 'react-redux';
import { addTodo, allCompleted, clearCompleted } from '../redux/todos/actions';

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
    }
    setInput('');
  }

  const completeHandler = () => {
    dispatch(allCompleted());
  }

  const clearHandler = () => {
    dispatch(clearCompleted());
  }

  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={submitHandler}
      >
        <img
          src={noteImage}
          className="w-6 h-6"
          alt="Add todo"
        />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={handleInput}
          data-cy="todo-input"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          onClick={completeHandler}
          className="flex space-x-1 cursor-pointer"
          data-cy="complete-all"
        >
          <img
            className="w-4 h-4"
            src={tickImage}
            alt="Complete"
          />
          <span>Complete All Tasks</span>
        </li>
        <li
          onClick={clearHandler}
          className="cursor-pointer"
          data-cy='clear-completed'
        >
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;