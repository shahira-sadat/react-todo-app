import React from 'react';
import TodoItem from './TodoItem';

function TodosList(props) {
  const propsAr = props;
  return (
    <ul>
      {propsAr.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={propsAr.handleChangeProps}
          deleteTodoProps={propsAr.deleteTodoProps}
          setUpdate={propsAr.setUpdate}
        />
      ))}
    </ul>
  );
}
export default TodosList;
