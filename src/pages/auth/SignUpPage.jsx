import { signUp } from '../../api/auth';
import { styled } from 'styled-components';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useValidation } from '../../hooks/useValidation';

export const SignUpPage = () => {
  const navigate = useNavigate();

  const { email, setEmail, password, setPassword, validateEmail, validatePassword } =
    useValidation();

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleSignup = async () => {
    const result = await signUp(email, password);
    if (result.success) {
      alert('회원가입이 성공적으로 완료되었습니다. 로그인 페이지로 이동합니다.');
      navigate('/signin');
    } else {
      alert('회원가입 실패:', result.error);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleSignup();
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
