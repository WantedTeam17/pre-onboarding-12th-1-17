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
      <div>
        <label>Email:</label>
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
        <label>Password:</label>
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

export default SignInPage;
