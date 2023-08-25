import { signUp } from '../../api/auth';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useValidation } from '../../hooks/useValidation';
import { AuthPageLayout, InputBox, InputLabel, ErrorText, LinkWrap } from '../../constants/style.d';
import { toast } from 'react-hot-toast';

export const SignUpPage = () => {
  const navigate = useNavigate();

  const {
    email,
    password,
    emailError,
    passwordError,
    validateEmail,
    validatePassword,
    handleChangeEmail,
    handleChangePassword,
  } = useValidation();

  const handleSignup = async () => {
    const result = await signUp(email, password);
    if (result.success) {
      toast.success('회원가입 성공! 로그인 페이지로 이동합니다.', {
        id: 'success-signup',
      });
      navigate('/signin');
    } else {
      toast.error('회원가입중 문제가 발생했습니다.', {
        id: 'error-signup',
      });
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleSignup();
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
            type="email"
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
          회원가입
        </Button>
        <LinkWrap>
          <Link to="/signin" style={{ color: '#000' }}>
            로그인 하기
          </Link>
        </LinkWrap>
      </AuthPageLayout>
    </form>
  );
};

export default SignUpPage;
