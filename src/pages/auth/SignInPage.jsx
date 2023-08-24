import { useState } from 'react';
import api from '../../api/axios';
import { useNavigate } from 'react-router-dom';

function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
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
        // JWT 토큰을 로컬 스토리지에 저장
        localStorage.setItem('token', token);

        // 로그인 성공 후 /todo 페이지로 리다이렉트
        alert('success');
        return navigate('/todo');
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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>로그인</h2>
        <input type="text" placeholder="이메일" value={email} onChange={handleEmailChange} />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">로그인</button>
      </div>
    </form>
  );
}

export default SignInPage;
