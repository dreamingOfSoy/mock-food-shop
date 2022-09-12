import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import FoodSection from './components/Food';
import Modal from './components/Modal';

import lemonsJpg from './imgs/lemons.jpg';

const ContainerStyles = styled.div`
  position: relative;
`;

const ImgSection = styled.section`
  width: 100%;
  height: 30rem;

  overflow: hidden;

  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
`;

const LemonImg = styled.img`
  margin-top: -12rem;
  z-index: -1;

  width: 100%;
`;

const foodItems = [
  {
    title: 'Lemon Sushi',
    description: 'Rice with lemons',
    price: '18',
    key: Math.random(),
  },
  {
    title: 'Lemon Soup',
    description: 'Spicy soup with lemons',
    price: '10.99',
    key: Math.random(),
  },
  {
    title: 'Tempora',
    description: 'Deep fried lemons',
    price: '8',
    key: Math.random(),
  },
  {
    title: 'Lemon and Chips',
    description: 'Deep fried lemon with chips',
    price: '22',
    key: Math.random(),
  },
];

export const FoodItemsContext = React.createContext(foodItems);

export const InCartContext = React.createContext({
  type: undefined,
  items: [],
  totalItem: 0,
  totalPrice: 0,
});

const iState = {
  type: undefined,
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const reducer = (state, action) => {
  let { items, totalItems, totalPrice } = state;

  switch (action.type) {
    case 'increment': {
      const i = items.findIndex(item => item.title === action.item.title);
      items[i].amount++;
      totalItems++;
      totalPrice += +action.item.price;

      if (items[i].amount === 0) items.splice(i, 1);

      return { items: items, totalItems, totalPrice };
    }
    case 'decrement': {
      const i = items.findIndex(item => item.title === action.item.title);
      items[i].amount--;
      totalItems--;
      totalPrice -= +action.item.price;

      if (items[i].amount === 0) items.splice(i, 1);

      return { items: items, totalItems, totalPrice };
    }
    default:
      totalPrice += +action.price * +action.amount;

      if (items.some(item => item.title === action.title)) {
        const i = items.findIndex(item => item.title === action.title);
        items[i].amount += +action.amount;
        totalItems += +action.amount;
        return { items: items, totalItems, totalPrice };
      }

      items = [...items, action];
      totalItems += +action.amount;
      return { items: items, totalItems, totalPrice };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, iState);

  const [modalOpen, setModelOpen] = useState(false);

  const modalOpenHandler = state => {
    setModelOpen(state);
  };

  return (
    <InCartContext.Provider value={{ state, dispatch }}>
      <FoodItemsContext.Provider value={foodItems}>
        <ContainerStyles>
          <Header isModalOpen={modalOpen} modalOpen={modalOpenHandler} />
          <ImgSection>
            <LemonImg src={lemonsJpg} alt="lemons" />
          </ImgSection>
          <FoodSection />
          <Modal isModalOpen={modalOpen} modalOpen={modalOpenHandler} />
        </ContainerStyles>
      </FoodItemsContext.Provider>
    </InCartContext.Provider>
  );
}

export default App;
