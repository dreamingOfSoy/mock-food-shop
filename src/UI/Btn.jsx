import styled from 'styled-components';

const btnSizes = {
  small: { height: '2rem', width: '6rem', fontSize: '1.2rem' },
  medium: { height: '4rem', width: '12rem', fontSize: '1.4rem' },
  large: { height: '4.8rem', width: '18rem', fontSize: '2rem' },
};

const BtnStyles = styled.button`
  height: ${props => btnSizes[props.btnSize].height};
  width: ${props => btnSizes[props.btnSize].width};

  cursor: pointer;

  border: none;
  border-radius: 0.5rem;

  background-color: #171616;
  color: aliceblue;
`;

const BtnText = styled.span`
  display: ${props => {
    if (props.display === 'flex') return 'flex';

    return 'block';
  }};

  align-items: center;
  justify-content: center;

  gap: ${props => {
    if (props.btnSize === 'small') return '0.8rem';
    if (props.btnSize === 'medium') return '1.2rem';
    if (props.btnSize === 'large') return '1.8rem';
  }};

  font-size: ${props => btnSizes[props.btnSize].fontSize};
  font-weight: 700;
`;

const Btn = ({ children, ...props }) => {
  return (
    <BtnStyles
      className={props.className}
      btnSize={props.btnSize}
      onClick={props.onClick}
    >
      <BtnText
        btnSize={props.btnSize}
        display={props.display}
        type={props.type || 'button'}
      >
        {children}
      </BtnText>
    </BtnStyles>
  );
};

export default Btn;
