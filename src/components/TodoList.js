import React from 'react';
import Todo from './Todo';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div
      className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
    >
      {
        todos.length === 0 && (
          <p className="text-center font-bold my-5 text-lg" id="empty-task">No task available!</p>
        )
      }
      {
        todos.map((todo) => <Todo key={todo.id} todo={todo} />)
      }
    </div>
  );
};

export default TodoList;