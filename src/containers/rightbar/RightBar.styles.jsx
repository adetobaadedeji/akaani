import styled from 'styled-components';

export const RBWrapper = styled.section`
  width: 19.2%;
  height: 100%;
  padding: 5.2rem 1.6rem 0rem 1rem;
  text-align: left;
`;
export const RBContainer = styled.section``;
export const Invites = styled.section`
  width: 100%;
  min-height: 19.3rem;
  padding: 0 0.9rem;
  margin-bottom: 2.6rem;
  border-bottom: 1px solid #f0f0f0;
`;
export const RecentPayments = styled.section`
  width: 100%;
  /* min-height: 26.3rem; */
  min-height: 22.3rem;
  padding: 0 0.9rem;
  margin-bottom: 3.1rem;
  border-bottom: 1px solid #f0f0f0;

  @media only screen and (max-width: 1441px) {
    min-height: 26.3rem;
  }
`;
export const PreviousOrders = styled.section`
  width: 100%;
  padding: 0 0.9rem;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.2rem;
  color: var(--black);
  margin-bottom: 0.8rem;
  text-transform: uppercase;
`;
export const Desc = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
`;
