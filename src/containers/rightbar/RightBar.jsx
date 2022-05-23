import {
  Desc,
  Invites,
  PreviousOrders,
  RBContainer,
  RBWrapper,
  RecentPayments,
  Title,
} from './RightBar.styles';

const RightBar = () => {
  return (
    <RBWrapper>
      <RBContainer>
        <Invites>
          <Title>INVITES </Title>
          <Desc>You have no invites.</Desc>
        </Invites>
        <RecentPayments>
          <Title>RECENT PAYMENTS</Title>
          <Desc>No Payment has been made. </Desc>
        </RecentPayments>
        <PreviousOrders>
          <Title>PREVIOUS ORDERS</Title>
          <Desc>You have created no order.</Desc>
        </PreviousOrders>
      </RBContainer>
    </RBWrapper>
  );
};

export default RightBar;
