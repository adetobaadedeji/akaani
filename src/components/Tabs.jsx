import { useState } from 'react';
import styled from 'styled-components';
import Tab from './Tab';

const Tabs = (props) => {
  const { children } = props;
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <TabPanel>
      <TabHeader>
        {children.map((child) => {
          const { label } = child.props;
          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClickTab={onClickTabItem}
            />
          );
        })}
      </TabHeader>
      <TabContent>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </TabContent>
    </TabPanel>
  );
};

export default Tabs;

const TabPanel = styled.section`
  width: 100%;
`;

const TabHeader = styled.header`
  width: 100%;
  border-bottom: 2px solid #f0f0f0;
  display: flex;
`;
const TabContent = styled.section`
  width: 100%;
`;
