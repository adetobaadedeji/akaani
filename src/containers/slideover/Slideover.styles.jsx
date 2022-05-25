import styled, { css } from 'styled-components';

export const SlideoverWrapper = styled.aside``;

export const SlideoverOverlay = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 900;
  display: ${({ isSlideoverOpen }) => (isSlideoverOpen ? 'block' : 'none')};
`;

export const SlideoverContainer = styled.section`
  width: 50rem;
  max-width: 50rem;
  background-color: var(--white);
  box-shadow: 0px 2px 5px rgba(182, 182, 182, 0.7);
  transition: linear 0.5s;
  transform: translateX(50vw);
  ${({ isSlideoverOpen }) =>
    isSlideoverOpen &&
    css`
      transform: translateX(0px);
    `}
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  overflow-y: auto;
`;

export const SlideroverContent = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const ContentHeader = styled.section`
  width: 100%;
  max-height: 9rem;
  padding:  1.4rem .2rem 1.4rem 2.8rem;
  display: flex;
  align-items: center;

  h1 {
    margin-left: 4rem;
    margin-right: auto;
    font-weight: 600;
    font-size: 2rem;
    line-height: 3rem;
    color: #2e2c2c;
    transform: translateY(-.2rem);
  }

`;
export const ContentMain = styled.section`
padding: 0 2.7rem 0 2.8rem;
display: flex;
flex-direction: column;
gap: 1rem;
`;
export const ContentFooter = styled.section`
  margin-top: auto;
  width: 100%;
  height: 9.1rem;
  box-shadow: 2px 0px 4px rgba(158, 158, 158, 0.4);
  border-radius: 1px;
  padding: 1.8rem 1.5rem 1.7rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.2rem;
    color: #2e2c2c;
    text-transform: uppercase;
    opacity: 0.56;
  }
  span {
    font-weight: 700;
    font-size: 2.1rem;
    line-height: 3.2rem;
    color: #2e2c2c;
  }
  button {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.2rem;
    letter-spacing: 0.01rem;
    color: var(--white);
    background-color: var(--teal);
    border-radius: 3px;
    padding: 0.9rem 2.8rem 0.8rem 2.7rem;
    border: none;
  }
`;
