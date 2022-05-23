import { ReactComponent as SearchIcon } from '../../assests/search-icon.svg';
import TruckIcon from '../../assests/truck.svg';
import CreditCardIcon from '../../assests/creditcard.svg';
import GiftIcon from '../../assests/gift.svg';
import { ReactComponent as ShopIcon } from '../../assests/shop.svg';
import { ReactComponent as ToggleIcon } from '../../assests/toggle-button.svg';
import {
  BasketHeader,
  BasketSection,
  MPHeader,
  MPWrapper,
  Overview,
  PaidTab,
  PaidContent,
  PendingTab,
  CompletedTab,
} from './MainPage.styles';
import OverviewItem from '../../components/OverviewItem';
import Tabs from '../../components/Tabs';

const MainPage = () => {
  const items = [
    {
      link: TruckIcon,
      title: 'In-Transit Jobs',
      value: '0',
      background: 'rgba(94, 126, 210, 0.2)',
    },
    {
      link: CreditCardIcon,
      title: 'Total Paid',
      value: '0.00',
      background: 'rgba(86, 177, 160, 0.2)',
    },
    {
      link: GiftIcon,
      title: 'Completed Jobs',
      value: '0',
      background: 'rgba(134, 141, 181, 0.2)',
    },
  ];

  return (
    <MPWrapper>
      <MPHeader>
        <h1>Good Evening, Laura!</h1>
        <form>
          <span>
            <SearchIcon />
          </span>
          <label htmlFor="search" className="sr-only">
            Search Basket
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search Basket"
            autoComplete="off"
          />
        </form>
      </MPHeader>
      <Overview>
        {items.map((item, idx) => (
          <OverviewItem key={idx} {...item} />
        ))}
      </Overview>
      <BasketSection>
        <BasketHeader>
          <h2>Baskets</h2>
          <button>Create Basket</button>
        </BasketHeader>
      </BasketSection>
      <Tabs>
        <PaidTab label="Paid">
          <PaidContent>
            <div className="icon-background">
              <ShopIcon />
            </div>
            <p className="para">No Paid Baskets, yet!</p>
            <div className="toggle">
              <ToggleIcon />
            </div>
          </PaidContent>
        </PaidTab>
        <PendingTab label="Pending">Pending</PendingTab>
        <CompletedTab label="Completed">Completed</CompletedTab>
      </Tabs>
    </MPWrapper>
  );
};

export default MainPage;
