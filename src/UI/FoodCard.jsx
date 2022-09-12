import styled from 'styled-components';
import Btn from './Btn';
import { formatter } from '../helpers/helper-functions';
import { useState } from 'react';
import { FlexColumn } from '../helpers/mixins';

const Card = styled.div`
  height: 10rem;
  width: 100%;

  background-color: rgba(231, 115, 115);

  border-radius: 0.5rem;
  padding: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const CardForm = styled.form`
  ${FlexColumn('flex-end', false)}
  gap: 1.2rem;

  & div {
    display: flex;
    gap: 1rem;
  }

  & label {
    font-size: 1.4rem;
    font-weight: 700;
  }

  & input {
    width: 5.8rem;
    border: solid 0.1rem black;
    padding: 0.2rem;
    color: white;
    background-color: #e77373;
    border-radius: 0.5rem;

    &::placeholder {
      color: rgba(255, 255, 255, 0.704);
    }
  }
`;

const CardDataTitle = styled.span`
  font-weight: 700;
  font-size: 1.8rem;
`;
const CardDataDesc = styled.span`
  font-size: 1.2rem;
`;
const CardDataPrice = styled.span`
  font-size: 1.8rem;
  color: aliceblue;
`;

const FoodCard = props => {
  const [value, setValue] = useState(1);

  const valueChangeHandler = e => {
    setValue(e.target.value);
  };

  const addItemHandler = e => {
    e.preventDefault();

    const item = {
      title: props.title,
      price: props.price,
      amount: value,
      key: Math.random(),
    };

    props.addItemToCart(item);
  };

  return (
    <Card>
      <CardData>
        <CardDataTitle>{props.title}</CardDataTitle>
        <CardDataDesc>{props.description}</CardDataDesc>
        <CardDataPrice>{formatter.format(props.price)}</CardDataPrice>
      </CardData>
      <CardForm onSubmit={addItemHandler}>
        <div>
          <label>Amount:</label>
          <input
            placeholder="1"
            value={value}
            onChange={valueChangeHandler}
            required
          ></input>
        </div>
        <Btn btnSize="small" type="submit">
          Add
        </Btn>
      </CardForm>
    </Card>
  );
};

export default FoodCard;
