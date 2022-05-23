import styled, { css } from 'styled-components';

const Tab = (props) => {
  const { activeTab, label, onClickTab } = props;

  const handleClick = () => {
    onClickTab(label);
  };

  let active = '';
  if (activeTab === label) {
    // tab-list-active
    active = 'true';
  }

  return (
    <TabHeading active={active} onClick={handleClick}>
      {label}
    </TabHeading>
  );
};

export default Tab;

const TabHeading = styled.h3`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.2rem;
  color: var(--light-gray);
  cursor: pointer;
  transition: var(--transition);
  padding: 0 1.4rem 0.6rem;
  transform: translateY(0.15rem);

  ${({ active }) =>
    active &&
    css`
      color: var(--teal);
      border-bottom: 2px solid var(--teal);
      font-weight: 500;
    `};

  :hover {
    color: var(--teal);
    border-bottom: 2px solid var(--teal);
  }
`;
