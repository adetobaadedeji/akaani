import { LeftBar, MainPage, RightBar } from './containers';
import { GlobalStyles } from './globalStyles'
import styled from 'styled-components';


function App() {
  return (
    <>
    <GlobalStyles />
    <Main>
      <LeftBar />
      <MainPage />
      <RightBar />
    </Main>
  </>
    
  );
}

export default App;

const Main = styled.main`
  width: 100%;
  display: flex;
  height: 100vh;
`;
