import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTodoContext } from '../../context/TodoContext';
import { useAuthContext } from '../../context/AuthContext';
import { fetchTodo as getTodos } from '../../api/todo';
import TodoList from '../../components/todo/TodoList';

const TodoPage = () => {
  const { setTodos } = useTodoContext();
  const { accessToken } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/signin');
    }

    const fetchTodos = async () => {
      try {
        const fetchedTodos = await getTodos();
        setTodos(fetchedTodos);
      } catch (error) {
        alert(error.message);
      }
    };

    if (accessToken) {
      fetchTodos();
    }
  }, [setTodos, accessToken, navigate]);

  return (
    <>
      <div>
        <TodoList />
      </div>
    </>
  );
};

export default TodoPage;
