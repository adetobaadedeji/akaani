import styled from 'styled-components';

const OverviewItem = ({ link, title, value, background }) => {
  return (
    <ItemContainer>
      <ImageContainer background={background}>
        <img src={link} alt="Icon" />
      </ImageContainer>
      <ItemContent>
        <p>{title}</p>
        <span>${value}</span>
      </ItemContent>
    </ItemContainer>
  );
};

export default OverviewItem;

const ItemContainer = styled.section`
  width: 22.7rem;
  height: 7.4rem;
  padding-left: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.9rem;
  background: var(--white);
  box-shadow: 0px 2px 10px rgba(182, 182, 182, 0.25);
  border-radius: 7px;
`;

const ImageContainer = styled.section`
  width: 5rem;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({background}) => background && background};
`;

const ItemContent = styled.section`
  text-align: left;

  p {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: var(--darker-gray);
  }

  span {
    font-weight: 600;
    font-size: 2.2rem;
    line-height: 3.3rem;
    color: var(--black);
  }
`;
