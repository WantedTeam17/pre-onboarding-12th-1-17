import { useState } from "react";

export const AddTodo = () => {

    const [inputData, setInputData] = useState('');

    const handleChange = (event) => {
        setInputData(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const body = {
            todo: inputData
        };

        // API 호출하는 부분.

        setInputData('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input data-testid="new-todo-input" placeholder='새롭게 추가할 내용을 입력해주세요.' onChange={handleChange} value={inputData} />
            <button data-testid="new-todo-add-button">추가</button>
        </form>
    );
};