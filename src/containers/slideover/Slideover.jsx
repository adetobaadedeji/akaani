import { useSelector, useDispatch } from 'react-redux';
import {
  toggleSlideover,
  slideoverSelector,
} from '../../redux/slices/slideoverSlice';
import { ReactComponent as ArrowLeft } from '../../assests/arrow-left.svg';
import { ReactComponent as ToggleIcon } from '../../assests/toggle-button.svg';
import MIcon from '../../assests/m-icon.svg';
import RIcon from '../../assests/r-icon.svg';
import MPIcon from '../../assests/mp-icon.svg';
import {
  ContentFooter,
  ContentHeader,
  ContentMain,
  SlideoverContainer,
  SlideoverOverlay,
  SlideoverWrapper,
  SlideroverContent,
} from './Slideover.styles';
import CartItem from '../../components/CartItem';

const Slideover = () => {
  const items = [
    {
      link: MIcon,
      title: 'Okazi Leaves ',
      amount: '$30',
      text: '1 kg',
    },
    {
      link: RIcon,
      title: 'Okazi Leaves ',
      amount: '$120',
      text: '4 kg',
    },
    {
      link: MPIcon,
      title: 'Rice Bean Lea...',
      amount: '$50',
      text: '1 kg',
    },
    {
      link: MIcon,
      title: 'Efo Stew Ingre...',
      amount: '$45',
      text: '1 kg',
    },
  ];
  const isSlideoverOpen = useSelector(slideoverSelector);
  const dispatch = useDispatch();

  const handleOverlayToggle = () => {
    dispatch(toggleSlideover());
  };
  const handleToggle = () => {
    if (isSlideoverOpen) {
      dispatch(toggleSlideover());
    }
  };
  return (
    <SlideoverWrapper>
      <SlideoverOverlay
        isSlideoverOpen={isSlideoverOpen}
        onClick={handleOverlayToggle}
      />
      <SlideoverContainer isSlideoverOpen={isSlideoverOpen}>
        <SlideroverContent>
          <ContentHeader>
            <section onClick={handleToggle}>
              <ArrowLeft />
            </section>
            <h1>My Cart</h1>
            <ToggleIcon />
          </ContentHeader>
          <ContentMain>
            {items.map((item, idx) => (
              <CartItem key={idx} {...item} />
            ))}
          </ContentMain>
          <ContentFooter>
            <div>
              <p>TOTAL</p>
              <span>$2,560</span>
            </div>
            <button>DONE SHOPPING</button>
          </ContentFooter>
        </SlideroverContent>
      </SlideoverContainer>
    </SlideoverWrapper>
  );
};

export default Slideover;
