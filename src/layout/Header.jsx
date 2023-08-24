import { styled } from 'styled-components';

export const Header = () => {
  // TODO: 로그인 된지 안된지 확인 후 버튼쪽(로그인, 회원가입 / 로그아웃) 바꾸기
  // TODO: 버튼 컴포넌트 사용
  return (
    <HeaderContainer>
      <HeaderBox>
        <H1>My Wanted Todo APP</H1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button style={{ width: '7.5rem', height: '3.75rem' }}>로그인</button>
          <button type="button" style={{ width: '7.5rem', height: '3.75rem' }}>회원가입</button>
        </div>
      </HeaderBox>
    </HeaderContainer>
  );
};

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
