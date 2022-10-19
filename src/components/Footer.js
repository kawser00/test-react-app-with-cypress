import React from 'react';
import { useSelector } from 'react-redux';

const numberOfTodos = (no_of_todos) => {
  switch (no_of_todos) {
    case 0:
      return 'No task';
    case 1:
      return '1 task'
    default:
      return `${no_of_todos} tasks`;
  }
}

const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const todosRemaining = todos.filter(todo => !todo.completed).length;

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p data-cy="remaining-todos">{numberOfTodos(todosRemaining)} left</p>
    </div>
  );
};

export default Footer;