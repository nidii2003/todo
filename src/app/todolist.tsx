import React from 'react';
import TodoItem from './todoitem';

interface TodoListProps {
  todos: {
    id: number;
    title: string;
    description: string;
  }[];
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} onDelete={onDelete} />
        </li>
      ))}
      </ul>
  );
      };
      export default TodoList;