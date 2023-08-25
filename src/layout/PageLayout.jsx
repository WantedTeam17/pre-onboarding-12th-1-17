import { styled } from 'styled-components';
import Header from './Header';
import { colors } from '../constants/color';

const PageLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      <ContentsBox>
        <main style={{ width: '100%', height: '100%' }}>{children}</main>
      </ContentsBox>
    </Layout>
  );
};

export default PageLayout;

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f4eeee;
`;

const ContentsBox = styled.div`
  width: max-content;
  height: 31.25rem;
  margin: auto;
  padding: 2.75rem;
  border: 0.5px solid ${colors.grey};
  background: ${colors.white};
  box-shadow: 4px 8px 10px 0px rgba(0, 0, 0, 0.25);
`;
