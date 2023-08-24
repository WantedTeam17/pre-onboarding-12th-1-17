import { styled } from 'styled-components';
import { colors } from '../../constants/color';

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
  height: 2rem;
  border-radius: 0.625rem;
  padding: 1rem;
  border: 0.5px solid #a2a2a2;
  background: #fff;
  font-size: 1.5rem;

  &::placeholder {
    color: #a2a2a2;
    font-size: 1.5rem;
  }
  &:focus {
    outline: solid 1px ${colors.primary};
  }
`;
