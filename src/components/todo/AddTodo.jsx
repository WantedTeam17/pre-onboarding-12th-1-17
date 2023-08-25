import { useState } from 'react';
import { createTodo } from '../../api/todo';
import { useTodoContext } from '../../context/TodoContext';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { styled } from 'styled-components';
import { toast } from 'react-hot-toast';

const AddTodo = () => {
  const { todoList: prevTodos, handleCreateTodo } = useTodoContext();
  const [inputData, setInputData] = useState('');

  const handleInputValueChange = event => {
    setInputData(event.target.value);
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    if (!inputData) {
      toast.error('할 일을 입력해주세요.', {
        id: 'empty-input',
      });
      return;
    }

    try {
      const newTodo = await createTodo(inputData);
      handleCreateTodo(prevTodos, newTodo);
      toast.success('할 일이 추가되었습니다.', {
        id: 'success-add-todo',
      });

      setInputData('');
    } catch (error) {
      toast.error(error.message, {
        id: 'error-add-todo',
      });
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <AddTodoContainer>
        <Input
          placeholder="추가할 항목을 입력해주세요."
          onChange={handleInputValueChange}
          value={inputData}
          data-testid="new-todo-input"
        />
        <Button
          variant="primary"
          onClick={handleFormSubmit}
          data-testid="new-todo-add-button"
          size="large"
        >
          추가
        </Button>
      </AddTodoContainer>
    </form>
  );
};

export default AddTodo;

const AddTodoContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;
