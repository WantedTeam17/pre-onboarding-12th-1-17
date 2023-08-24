import { styled } from 'styled-components';
import Input from '../../components/ui/Input';
import { useValidation } from '../../hooks/useValidation';

export const SignInPage = () => {
  const { email, setEmail, password, setPassword, validateEmail, validatePassword } =
    useValidation();

  const handleSubmit = event => {
    event.preventDefault();
  };

  const isSubmitDisabled = !validateEmail() || !validatePassword();

  return (
      <form onSubmit={handleSubmit}>
        <InputBox>
          <Input
            testId="email-input"
            placeholder="이메일을 입력해주세요"
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            id="email"
          />
          <Input
            testId="password-input"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            id="password"
          />
        </InputBox>

        <button data-testid="signup-button" type="submit" disabled={isSubmitDisabled}>
          제출
        </button>
      </form>
  );
};

export default SignInPage;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.63rem;
`;
