import styled from 'styled-components';
import { colors } from '../../constants/color';
import { useTodoContext } from '../../context/TodoContext';
import TodoListItem from './TodoListItem';
import AddTodo from './AddTodo';

const TodoList = () => {
  const { todoList: prevTodos } = useTodoContext();
  const todoList = prevTodos;

  return (
    <TodoListContainer>
      <AddTodo />
      <TodosList>
        {todoList.map(todo => (
          <TodoListItem key={todo.id} {...todo} />
        ))}
      </TodosList>
    </TodoListContainer>
  );
};

export default TodoList;

const TodoListContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: ${colors.white};
  flex-direction: column;
  margin: 0 auto;
`;

const TodosList = styled.ul`
  margin-top: 20px;
  padding: 0;
`;
