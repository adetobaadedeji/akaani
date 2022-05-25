import styled from 'styled-components';
import { ReactComponent as CoconutIcon } from '../assests/coconut.svg';
import ArrowDown from '../assests/arrow-down.svg';

const CartItem = ({ link, title, amount, text }) => {
  return (
    <ItemContainer>
      <section>
        <CoconutIcon />
      </section>
      <section className="details">
        <p className="title">{title}</p>
        <span className="amount">{amount}</span>
      </section>
      <select>
        <option value={text}>
          {text}
        </option>
      </select>
      <img src={link} alt="user" />
    </ItemContainer>
  );
};

export default CartItem;

const ItemContainer = styled.section`
  width: 44.5rem;
  height: 11rem;
  padding: 2.3rem 2rem;
  background-color: rgba(86, 177, 160, 0.2);
  border-radius: 13px;
  display: flex;
  align-items: center;

  .details {
    width: 9.2rem;
    margin: 0 3.4rem 0 1.4rem;
  }

  .title {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: #514d4d;
  }

  .amount {
    font-weight: 700;
    font-size: 2.2rem;
    line-height: 3.3rem;
    color: #2e2c2c;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none; /* Remove default arrow */
    background: url(${ArrowDown}) 80% / 15% no-repeat var(--white); /* Add custom arrow */

    width: 8rem;
    height: 2.6rem;
    border-radius: 5px;
    padding: 0.3rem 1.4rem;
    border: none;
    outline: none;

    font-weight: 700;
    font-size: 1.3rem;
    line-height: 2rem;
    color: #2c2b2b;
  }

  img {
    margin-left: auto;
  }
`;
