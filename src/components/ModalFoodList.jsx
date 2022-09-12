import styled from 'styled-components';
import Btn from '../UI/Btn';
import { formatter } from '../helpers/helper-functions';

const ModalFoodCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.2rem solid black;

  & div {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

const CardData = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem;

  & div {
    display: flex;
    flex-direction: column;
  }
`;

const CardDataTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
`;

const CardDataPrice = styled.div`
  font-size: 1.8rem;
  color: aliceblue;
`;

const CardDataAmount = styled.div`
  padding: 1rem;
  border: 0.1rem solid black;
  border-radius: 0.5rem;
  font-size: 2rem;
`;

const ModalFoodList = props => {
  const item = {
    title: props.title,
    price: props.price,
    amount: props.amount,
    key: Math.random(),
  };

  const increaseHandler = () => {
    props.cart.dispatch({ type: 'increment', item });
  };

  const decreaseHandler = () => {
    props.cart.dispatch({ type: 'decrement', item });
  };

  return (
    <ModalFoodCard>
      <CardData>
        <div>
          <CardDataTitle>{props.title}</CardDataTitle>
          <CardDataPrice>{formatter.format(props.price)}</CardDataPrice>
        </div>
        <CardDataAmount>x {props.amount}</CardDataAmount>
      </CardData>
      <div>
        <Btn btnSize="small" onClick={increaseHandler}>
          +
        </Btn>
        <Btn btnSize="small" onClick={decreaseHandler}>
          -
        </Btn>
      </div>
    </ModalFoodCard>
  );
};

export default ModalFoodList;
