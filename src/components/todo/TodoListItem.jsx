import { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/color';
import Button from '../ui/Button';
import { updateTodo, deleteTodo } from '../../api/todo';
import { useTodoContext } from '../../context/TodoContext';

const TodoListItem = ({ todo, userId, id, isCompleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);
  const { todoList: prevTodos, handleUpdateTodo, handleDeleteTodo } = useTodoContext();

  const handleToggleCheckbox = async () => {
    const newTodo = {
      todo,
      id,
      userId,
      isCompleted: !isCompleted,
    };

    try {
      await updateTodo(newTodo);
      handleUpdateTodo(prevTodos, newTodo, id);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleInputValueChange = event => {
    setEditedTodo(event.target.value);
  };

  const handleEditTodo = () => {
    setIsEditing(true);
  };

  const handleSaveEditedTodo = async () => {
    if (editedTodo && editedTodo.trim() === '') {
      alert('할 일을 입력해주세요.');
      return;
    }

    const newTodo = {
      todo: editedTodo,
      id,
      userId,
      isCompleted,
    };

    try {
      await updateTodo(newTodo);
      handleUpdateTodo(prevTodos, newTodo, id);
      setIsEditing(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(id);
      handleDeleteTodo(prevTodos, id);
      alert('할 일이 삭제되었습니다.');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <TodoItem>
      <TodoItemLabel $isCompleted={isCompleted}>
        {isEditing ? null : (
          <Checkbox type="checkbox" checked={isCompleted} onChange={handleToggleCheckbox} />
        )}
        {isEditing ? (
          <InputEdit
            value={editedTodo}
            onChange={handleInputValueChange}
            data-testid="modify-input"
          />
        ) : (
          <span>{todo}</span>
        )}
      </TodoItemLabel>
      {isEditing ? (
        <ButtonContainer>
          <Button
            data-testid="submit-button"
            onClick={handleSaveEditedTodo}
            variant="primary"
            type="button"
          >
            제출
          </Button>
          <Button
            data-testid="cancel-button"
            variant="secondary"
            onClick={() => setIsEditing(false)}
            type="button"
          >
            취소
          </Button>
        </ButtonContainer>
      ) : (
        <ButtonContainer>
          <Button
            data-testid="modify-button"
            variant="secondary"
            onClick={handleEditTodo}
            type="button"
          >
            수정
          </Button>
          <Button
            data-testid="delete-button"
            variant="secondary"
            onClick={handleDelete}
            type="button"
          >
            삭제
          </Button>
        </ButtonContainer>
      )}
    </TodoItem>
  );
};

export default TodoListItem;

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const TodoItemLabel = styled.label`
  display: flex;
  align-items: center;

  span {
    opacity: ${props => (props.isCompleted ? 0.5 : 1)};
    text-decoration: ${props => (props.isCompleted ? 'line-through' : 'none')};
  }
`;

const Checkbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  background: ${colors.white};
  border: 1px solid ${colors.primary};
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  margin-right: 10px;

  &:checked {
    background: ${colors.primary};
  }
`;

const InputEdit = styled.input`
  flex: 1;
  padding: 10px;
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
  border: 1px solid #a2a2a2;

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 1px ${colors.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;
