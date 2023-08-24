import {createContext, useContext, useState} from 'react';

export const TodoContext = createContext();

export const useTodoContext = () => {
    const context = useContext(TodoContext);

    if (!context) {
        throw new Error('TodoContext에 문제가 발생했습니다.');
    }
    return context;
}

export const TodoContextProvider = ({children}) => {
    const [todoList, setTodoList] = useState([]);

    const handleCreateTodo = (todos, newTodos) => {
        const newTodoData = [...todos, newTodos];

        setTodoList(newTodoData);
    };

    const handleUpdateTodo = (todos, newTodo, id) => {
        const updatedTodoData = todos.map((todo) => todo.id === id ? newTodo : todo);

        setTodoList(updatedTodoData);
    }

    const handleDeleteTodo = (todos, id) => {
        const deletedTodoData = todos.filter((todo) => todo.id !== id);

        setTodoList(deletedTodoData);
    }

    return (
        <TodoContext.Provider value={{ todoList, setTodoList, handleCreateTodo, handleUpdateTodo, handleDeleteTodo }}>
            {children}
        </TodoContext.Provider>
    )
}