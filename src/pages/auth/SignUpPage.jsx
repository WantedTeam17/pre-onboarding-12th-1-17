import { styled } from 'styled-components';
import { signUp } from '../../api/auth';
import { useAuthContext } from '../../context/AuthContext';
import { useValidation } from '../../hooks/useValidation';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

export const SignUpPage = () => {
  const { email, setEmail, password, setPassword, validateEmail, validatePassword } =
    useValidation();
  const { setToken } = useAuthContext();

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const result = await signUp(email, password);
    if (result.success) {
      alert('회원가입이 성공적으로 완료되었습니다. 로그인 페이지로 이동합니다.');
      setToken(result.access_token);
    } else {
      console.error('회원가입 실패:', result.error);
    }
  };

  const isSubmitDisabled = !validateEmail() || !validatePassword();

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', height: '100%' }}>
      <SignUpContainer>
        <InputBox>
          <Input
            testId="email-input"
            placeholder="이메일을 입력해주세요"
            type="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <Input
            testId="password-input"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            value={password}
            onChange={handleChangePassword}
            id="password"
          />
        </InputBox>

        <Button
          variant="primary"
          size="large"
          disabled={isSubmitDisabled}
          style={{ width: '100%', margin: '3.75rem 0 1.25rem 0' }}
        >
          회원가입
        </Button>
        <LinkWrap>
          <Link to="/signin" style={{ color: '#000' }}>
            로그인 하기
          </Link>
        </LinkWrap>
      </SignUpContainer>
    </form>
  );
};

export default SignUpPage;

const SignUpContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.63rem;
`;

const LinkWrap = styled.div`
  width: 100%;
  text-align: right;
`;
