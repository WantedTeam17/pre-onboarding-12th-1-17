import { styled } from 'styled-components';
import { colors } from '../../constants/color';

const Input = ({ isError = false, ...props }) => {
  return <StyledInput $isError={isError} {...props} />;
};

export default Input;

const StyledInput = styled.input`
  width: 20rem;
  height: 2rem;
  border-radius: 0.625rem;
  padding: 1rem;
  border: 0.5px solid ${props => (props.$isError ? colors.error : colors.grey)};
  background: ${colors.white};
  font-size: 1.5rem;

  &::placeholder {
    color: ${colors.grey};
    font-size: 1.5rem;
  }

  outline: ${props => (props.$isError ? `solid 1px ${colors.error}` : 'none')};

  &:focus {
    outline: ${props =>
      !props.$isError ? `solid 1px ${colors.primary}` : `solid 1px ${colors.error}`};
  }
`;
