import { signUp } from '../../api/auth';
import { useAuthContext } from '../../context/AuthContext';
import { useValidation } from '../../hooks/useValidation';

export const SignUpPage = () => {
  const { email, setEmail, password, setPassword, validateEmail, validatePassword } =
    useValidation();
  const { setToken } = useAuthContext();

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
