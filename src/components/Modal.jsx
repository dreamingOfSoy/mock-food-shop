import styled from 'styled-components';
import ModalFoodList from './ModalFoodList';
import Btn from '../UI/Btn';
import { useContext } from 'react';
import { InCartContext } from '../App';
import { formatter } from '../helpers/helper-functions';

const Backdrop = styled.section`
  position: absolute;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100%;

  background-color: rgba(128, 128, 128, 0.534);

  display: ${props => (props.modalOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: rgb(231, 115, 115);

  padding: 4rem;

  height: auto;
  width: 60%;

  border-radius: 0.5rem;
`;

const CheckoutSection = styled.div`
  border-top: 0.2rem solid black;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  & div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & h3 {
      font-size: 2.2rem;
    }

    & h3:nth-child(2) {
      color: aliceblue;
    }
  }

  & div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
  }
`;

const Modal = props => {
  const cart = useContext(InCartContext);

  const setModal = () => {
    props.modalOpen(false);
  };

  return (
    <>
      <Backdrop
        className="overlay"
        modalOpen={props.isModalOpen}
        onClick={setModal}
      >
        <ModalContent className="modal" onClick={e => e.stopPropagation()}>
          {cart.state.items.length === 0 ? (
            <h1>No items in cart</h1>
          ) : (
            cart.state.items.map(item => (
              <ModalFoodList
                title={item.title}
                price={item.price}
                amount={item.amount}
                key={item.key}
                cart={cart}
              />
            ))
          )}
          <CheckoutSection>
            <div>
              <h3>Total Amount</h3>
              <h3>{formatter.format(cart.state.totalPrice)}</h3>
            </div>
            <div>
              <Btn className="modalBtn" btnSize="medium" onClick={setModal}>
                Close
              </Btn>
              <Btn btnSize="medium">Checkout</Btn>
            </div>
          </CheckoutSection>
        </ModalContent>
      </Backdrop>
    </>
  );
};

export default Modal;
