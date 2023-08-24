import { styled } from 'styled-components';
import Input from '../../components/ui/Input';
import { useValidation } from '../../hooks/useValidation';
import api from '../../api/axios';
import { useAuthContext } from '../../context/AuthContext';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

function SignInPage() {
  const { email, setEmail, password, setPassword, validateEmail, validatePassword } =
    useValidation();
  const { setToken } = useAuthContext();

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      // 로그인 요청
      const response = await api.post('/auth/signin', {
        email,
        password,
      });

      // 로그인 성공시 JWT 토큰을 받음
      if (response.status === 200) {
        const token = response.data.access_token;

        // JWT 토큰을 AuthContext에 저장하고 이동
        setToken(token);

        alert('로그인 성공!');
      } else {
        console.error('로그인에 실패하였습니다.');
      }
    } catch (error) {
      console.error('로그인 요청 중 오류 발생:', error);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleLogin();
  };

  const isSubmitDisabled = !validateEmail() || !validatePassword();

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', height: '100%' }}>
      <SignInContainer>
        <InputBox>
          <Input
            testId="email-input"
            placeholder="이메일을 입력해주세요"
            type="text"
            value={email}
            onChange={handleChangeEmail}
          />
          <Input
            testId="password-input"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
        </InputBox>
        <Button
          variant="primary"
          size="large"
          disabled={isSubmitDisabled}
          style={{ width: '100%', margin: '3.75rem 0 1.25rem 0' }}
        >
          로그인
        </Button>
        <LinkWrap>
          <Link to="/signup" style={{ color: '#000' }}>
            회원가입 하기
          </Link>
        </LinkWrap>
      </SignInContainer>
    </form>
  );
}

export default SignInPage;

const SignInContainer = styled.div`
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
