import { styled } from 'styled-components';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const Header = () => {
  const navigate = useNavigate();
  const { accessToken, removeToken } = useAuthContext();

  const goSignIn = () => {
    navigate('/signin');
  };

  const goSignUp = () => {
    navigate('/signup');
  };
  return (
    <HeaderContainer>
      <HeaderBox>
        <H1>My Wanted Todo APP</H1>
        {accessToken ? (
          <div>
            <Button
              variant="primary"
              size="medium"
              isFullWidth={false}
              disabled={false}
              onClick={removeToken}
            >
              로그아웃
            </Button>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button
              variant="secondary"
              size="medium"
              isFullWidth={false}
              disabled={false}
              onClick={goSignIn}
            >
              로그인
            </Button>
            <Button
              variant="primary"
              size="medium"
              isFullWidth={false}
              disabled={false}
              onClick={goSignUp}
            >
              회원가입
            </Button>
          </div>
        )}
      </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100vw;
  height: 10%;
  display: flex;
  background-color: #fff;
  border-bottom: 0.5px solid #a2a2a2;
`;

const HeaderBox = styled.div`
  width: 90vw;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
`;

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;
