import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTodoContext } from '../../context/TodoContext';
import { useAuthContext } from '../../context/AuthContext';
import { fetchTodo as getTodos } from '../../api/todo';
import TodoList from '../../components/todo/TodoList';
import { toast } from 'react-hot-toast';

const TodoPage = () => {
  const { setTodoList } = useTodoContext();
  const { accessToken } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/signin');
    }

    const fetchTodos = async () => {
      try {
        const fetchedTodos = await getTodos();
        setTodoList(fetchedTodos);
      } catch (error) {
        toast.error(error.message, {
          id: 'error-fetch-todos',
        });
      }
    };

    if (accessToken) {
      fetchTodos();
    }
  }, [setTodoList, accessToken, navigate]);

  return (
    <>
      <div>
        <TodoList />
      </div>
    </>
  );
};

export default TodoPage;
