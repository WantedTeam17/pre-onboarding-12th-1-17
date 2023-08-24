import { styled } from 'styled-components';
import Input from '../../components/ui/Input';
import { useValidation } from '../../hooks/useValidation';
import api from '../../api/axios';
import { useAuthContext } from '../../context/AuthContext';

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
    <form onSubmit={handleSubmit}>
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

      <button data-testid="signin-button" type="submit" disabled={isSubmitDisabled}>
        로그인
      </button>
    </form>
  );
}

export default SignInPage;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.63rem;
`;
