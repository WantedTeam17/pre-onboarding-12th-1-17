import { createContext, useContext, useState } from 'react';

export const TodoContext = createContext();

export const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('TodoContext에 문제가 발생했습니다.');
  }
  return context;
};

export const TodoContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  const handleCreateTodo = (todoList, newTodoLists) => {
    const newTodoData = [...todoList, newTodoLists];

    setTodoList(newTodoData);
  };

  const handleUpdateTodo = (todoList, newTodo, id) => {
    const updatedTodoData = todoList.map(todo => (todo.id === id ? newTodo : todo));

    setTodoList(updatedTodoData);
  };

  const handleDeleteTodo = (todoList, id) => {
    const deletedTodoData = todoList.filter(todo => todo.id !== id);

    setTodoList(deletedTodoData);
  };

  return (
    <TodoContext.Provider
      value={{ todoList, setTodoList, handleCreateTodo, handleUpdateTodo, handleDeleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
