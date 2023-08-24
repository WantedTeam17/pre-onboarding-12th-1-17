import { styled } from 'styled-components';
import Header from './Header';

const PageLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      <ContentsBox>
        <main>{children}</main>
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
  border: 0.5px solid #a2a2a2;
  background: #fff;
  box-shadow: 4px 8px 10px 0px rgba(0, 0, 0, 0.25);
`;
