import FoodList from './FoodList';
import styled from 'styled-components';
import { FlexColumn } from '../helpers/mixins';

const FoodSection = styled.section`
  margin-top: -10rem;
  padding: 2rem;
  width: 100%;
  height: 45rem;

  position: relative;

  ${FlexColumn()}
`;

const FoodContent = styled.div`
  width: 60rem;
  height: 38rem;

  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${FlexColumn()}
  gap: 2rem;
`;

const Desc = styled.div`
  background-color: rgba(231, 115, 115, 0.95);

  border-radius: 0.5rem;

  ${FlexColumn()}
  gap: 2rem;

  padding: 4rem;
`;

const DescTitle = styled.h2`
  font-size: 2.8rem;
`;

const DescPara = styled.p`
  font-size: 1.4rem;
`;

const Food = () => {
  return (
    <FoodSection>
      <FoodContent>
        <Desc>
          <DescTitle>Lemons to aid you</DescTitle>
          <DescPara>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur, labore magnam odio corrupti explicabo quisquam
            pariatur reprehenderit doloremque sint error.
          </DescPara>
          <DescPara>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur, labore magnam odio corrupti explicabo quisquam
            pariatur reprehenderit doloremque sint error.
          </DescPara>
        </Desc>
        <FoodList />
      </FoodContent>
    </FoodSection>
  );
};

export default Food;
