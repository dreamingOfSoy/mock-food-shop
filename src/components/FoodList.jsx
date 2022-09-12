import styled from 'styled-components';
import FoodCard from '../UI/FoodCard';
import { useContext } from 'react';
import { FoodItemsContext, InCartContext } from '../App';
import { FlexColumn } from '../helpers/mixins';

const ListStyles = styled.div`
  height: 100%;
  width: 100%;

  ${FlexColumn(false, 'flex-start')}

  gap: 2rem;
`;

const FoodList = () => {
  const foodItems = useContext(FoodItemsContext);
  const cart = useContext(InCartContext);

  const addItemsToCartHandler = item => {
    cart.dispatch(item);
  };

  return (
    <ListStyles>
      {foodItems.map(item => (
        <FoodCard
          addItemToCart={addItemsToCartHandler}
          title={item.title}
          description={item.description}
          price={item.price}
          key={item.key}
        />
      ))}
    </ListStyles>
  );
};

export default FoodList;
