import styled, { css } from 'styled-components';

export const LBWrapper = styled.section`
  width: 16.1%;
  padding: 3.3rem 2.7rem 3.4rem 3.4rem;
`;
export const LBContainer = styled.section`
  max-width: 17.1rem;
  height: calc(100vh - 6.7rem);
  display: flex;
  flex-direction: column;

`;
export const LogoContainer = styled.section`
  margin-bottom: 78px;
  /* margin-bottom: 58px; */

  img {
    width: 154px;

    @media only screen and (max-width: 1281px) {
      width: 124px;
    }
    @media only screen and (max-width: 1025px) {
      width: 104px;
    }
  }
`;

export const MenuItems = styled.section`
  display: flex;
  flex-direction: column;
  gap: 37px;
  /* gap: 2.7rem; */
`;

export const Item = styled.section`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: var(--dark-gray);
  }

  ${(props) =>
    props.active &&
    css`
      background-color: var(--teal);
      border-radius: 7px;
      max-width: 17.1rem;
      padding: 1.4rem;
      display: flex;
      align-items: center;
      gap: 1.2rem;

      p {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: var(--white);
      }
    `}
`;

export const UserProfile = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;

  div {
    width: 58px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--teal);
    border-radius: 50%;
    padding: 1.5rem;
  }

  p {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: var(--black);
  }

  span {
    color: var(--light-gray);
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 1.8rem;
    margin-bottom: 13px;
  }
`;
