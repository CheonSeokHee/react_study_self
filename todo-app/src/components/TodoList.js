import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
// 여러 종류의 값을 전달해야 하는 경우에는 객체를 통째로 전달하는 편이 나중에 성능 최적화 할 때 편리하다고 한다.

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
    {todos.map((todo) => (
      <TodoListItem
        todo={todo}
        key={todo.id}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    ))}
  </div>
  );
};

export default TodoList;