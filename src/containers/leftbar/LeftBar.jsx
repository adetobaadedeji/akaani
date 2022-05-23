import {
  LBContainer,
  LBWrapper,
  LogoContainer,
  MenuItems,
  Item,
  UserProfile,
} from './LeftBar.styles';
import { ReactComponent as UserIcon } from '../../assests/user-icon.svg';
import { ReactComponent as BasketIcon } from '../../assests/basket-icon.svg';
import { ReactComponent as HistoryIcon } from '../../assests/history-order.svg';
import { ReactComponent as LE } from '../../assests/LE.svg';
import { ReactComponent as LogoutIcon } from '../../assests/logout-key.svg';
import Logo from '../../assests/logo-svg.svg';

const LeftBar = () => {
  return (
    <LBWrapper>
      <LBContainer>
        <LogoContainer>
          <img src={Logo} alt="Website Logo" />
        </LogoContainer>
        <MenuItems>
          <Item>
            <UserIcon />
            <p>Profile</p>
          </Item>
          <Item active="true">
            <BasketIcon />
            <p>Baskets</p>
          </Item>
          <Item>
            <HistoryIcon />
            <p>Order History</p>
          </Item>
        </MenuItems>
        <UserProfile>
          <div>
            <LE />
          </div>
          <p>Laura Edson</p>
          <span>lauraedson@work.com</span>
          <LogoutIcon />
        </UserProfile>
      </LBContainer>
    </LBWrapper>
  );
};

export default LeftBar;
