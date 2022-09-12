import React, { useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Btn from '../UI/Btn';
import { ReactComponent as CartIcon } from '../imgs/CartIcon.svg';
import { useContext, useState } from 'react';
import { InCartContext } from '../App';

const bumpAni = keyframes`
 0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }`;

const HeaderStyles = styled.header`
  background-color: #e77373;

  padding: 4rem;
  padding-left: 10rem;
  padding-right: 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.h1`
  font-size: 3.6rem;
`;

const CartNumberDiv = styled.div`
  height: 3rem;
  width: 3rem;

  background-color: #e77373;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const CartNumber = styled.h3`
  font-size: 2rem;
`;

const CartIconStyled = styled(CartIcon)`
  height: 2.4rem;
`;

const CartBtn = styled(Btn)`
  animation: ${props =>
    props.wobble
      ? css`
          ${bumpAni} 300ms ease-out
        `
      : 'none'};
`;

const Header = props => {
  const cart = useContext(InCartContext);
  const [wobble, setWobble] = useState(false);

  useEffect(() => {
    if (cart.state.totalItems > 0) {
      setWobble(true);
    }

    const timer = setTimeout(() => {
      setWobble(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cart.state.totalItems]);

  const setModal = () => {
    props.modalOpen(true);
  };

  return (
    <HeaderStyles>
      <HeaderTitle>LemonAid</HeaderTitle>
      <CartBtn
        btnSize="large"
        display="flex"
        onClick={setModal}
        wobble={wobble}
        key={cart.state.totalItems}
      >
        <CartIconStyled />
        Cart
        <CartNumberDiv>
          <CartNumber>{cart.state.totalItems}</CartNumber>
        </CartNumberDiv>
      </CartBtn>
    </HeaderStyles>
  );
};

export default Header;
