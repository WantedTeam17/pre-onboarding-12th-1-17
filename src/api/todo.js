import api from './axios';

//할 일 목록을 가져오는 API 호출 함수
export const fetchTodo = async () => {
  const response = await api.get('/todos');
  return response.data;
};

//새로운 할 일을 생성하는 API 호출 함수
export const createTodo = async todo => {
  const response = await api.post('/todos', { todo });
  const newTodo = response.data;

  return newTodo;
};

//할 일 항목을 삭제하는 API 호출 함수입니다. id를 통해 삭제할 할 일을 명시
export const deleteTodo = async id => {
  const response = await api.delete(`todos/${id}`);
  return response;
};

// 할 일 항목을 수정하는 API 호출 함수
export const updateTodo = async todo => {
  const data = {
    todo: todo.todo,
    isCompleted: todo.isCompleted,
  };

  const response = await api.put(`/todos/${todo.id}`, data);
  const updatedTodo = response.data;

  return updatedTodo;
};
