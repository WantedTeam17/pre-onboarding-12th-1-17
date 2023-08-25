import api from '../../api/axios';
import { Link } from 'react-router-dom';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useValidation } from '../../hooks/useValidation';
import { useAuthContext } from '../../context/AuthContext';
import { AuthPageLayout, InputBox, InputLabel, ErrorText, LinkWrap } from '../../constants/style.d';

function SignInPage() {
  const {
    email,
    password,
    validateEmail,
    validatePassword,
    handleChangeEmail,
    handleChangePassword,
    emailError,
    passwordError,
  } = useValidation();
  const { setToken } = useAuthContext();

  const handleLogin = async () => {
    try {
      const response = await api.post('/auth/signin', {
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.access_token;
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
      <AuthPageLayout>
        <InputBox>
          <InputLabel for="email">이메일</InputLabel>
          <Input
            testId="email-input"
            placeholder="이메일을 입력해주세요"
            type="text"
            value={email}
            onChange={handleChangeEmail}
            id="email"
            isError={!!emailError}
          />
          <ErrorText>{emailError ? emailError : ''}</ErrorText>
          <InputLabel for="password">비밀번호</InputLabel>
          <Input
            testId="password-input"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            value={password}
            onChange={handleChangePassword}
            id="password"
            isError={!!passwordError}
          />
          <ErrorText>{passwordError ? passwordError : ''}</ErrorText>
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
      </AuthPageLayout>
    </form>
  );
}

export default SignInPage;
