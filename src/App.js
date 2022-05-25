import { LeftBar, MainPage, RightBar } from './containers';
import { GlobalStyles } from './globalStyles'
import styled from 'styled-components';
import Slideover from './containers/slideover/Slideover';


function App() {
  return (
    <>
    <GlobalStyles />
    <Main>
      <LeftBar />
      <MainPage />
      <RightBar />
      <Slideover />
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
