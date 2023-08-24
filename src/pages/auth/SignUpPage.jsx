import { signUp } from '../../api/auth';
import { useValidation } from '../../hooks/useValidation';
import { useNavigate } from 'react-router-dom';

export const SignUpPage = () => {
  const { email, setEmail, password, setPassword, validateEmail, validatePassword } =
    useValidation();
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();

    const result = await signUp(email, password);
    if (result.success) {
      // 회원가입 성공 처리
      alert('회원가입이 성공적으로 완료되었습니다. 로그인 페이지로 이동합니다.');
      navigate('/signin');
    } else {
      // 회원가입 실패 처리
      console.error('회원가입 실패:', result.error);
      // 이후 실패 시 사용자에게 알림을 주거나 다른 작업을 수행할 수 있습니다.
    }
  };

  const isSubmitDisabled = !validateEmail() || !validatePassword();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          data-testid="email-input"
          placeholder="이메일 주소를 입력해주세요"
          type="text"
          value={email}
          onChange={event => setEmail(event.target.value)}
          id="email"
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          data-testid="password-input"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          id="password"
        />
      </div>

      <button data-testid="signup-button" type="submit" disabled={isSubmitDisabled}>
        제출
      </button>
    </form>
  );
};

export default SignUpPage;
