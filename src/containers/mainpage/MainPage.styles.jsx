import styled from 'styled-components';

export const MPWrapper = styled.section`
  width: 64.72%;
  padding: 4.3rem 3.2rem 0 2.3rem;
  border-left: 2px solid #f0f0f0;
  border-right: 2px solid #f0f0f0;
`;
export const MPHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  h1 {
    font-weight: 600;
    font-size: 3.1rem;
    line-height: 4.6rem;
  }

  form {
    position: relative;
    margin-right: 5.3rem;
    border: 2px solid #f0f0f0;
    border-radius: 6px;
  }

  span {
    position: absolute;
    top: 25%;
    left: 4%;
  }

  .sr-only:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  input {
    border: none;
    outline: none;
    width: 25.4rem;
    height: 3.8rem;
    padding-left: 3.7rem;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: var(--darker-gray);

    ::placeholder {
      color: #c7c3c3;
    }
  }
`;

export const Overview = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2.9rem;
  margin-bottom: 4rem;
`;
export const BasketSection = styled.section`
  width: 100%;
`;
export const BasketHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  h2 {
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 3.6rem;
    color: #020202;
  }

  button {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.8rem;
    letter-spacing: 0.01rem;
    color: var(--white);
    padding: 0.9rem 2.1rem 0.8rem 2.3rem;
    border-radius: 4px;
    background-color: var(--teal);
    border: none;
  }
`;

export const PaidTab = styled.section``;
export const PendingTab = styled.section``;
export const CompletedTab = styled.section``;

export const PaidContent = styled.section`
  width: 100%;
  min-height: calc(100vh - 32rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .icon-background {
    width: 9.2rem;
    height: 8.9rem;
    background: rgba(84, 154, 154, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5.9rem 0 9px;
  }

  .para {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--medium-gray);
  }

  .toggle {
    position: absolute;
    bottom: 10%;
    right: -2%;
  }
`;
