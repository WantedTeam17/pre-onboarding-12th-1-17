import { styled } from 'styled-components';

const Input = ({ testId, placeholder, type, value, onChange }) => {
  return (
    <StyledInput
      data-testid={testId}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    ></StyledInput>
  );
};

export default Input;

const StyledInput = styled.input`
  width: 20rem;
  height: 3.75rem;
  border-radius: 0.625rem;
  border: 0.5px solid #a2a2a2;
  background: #fff;
  &::placeholder{
    color: #A2A2A2;
    font-size: 1.5rem;
  }
`;
