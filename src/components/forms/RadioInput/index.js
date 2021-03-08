import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';

const Radio = styled.input`
  display: none;
`;

const RadioWrapper = styled.label`
  height: 79px;
  width: 100%;
  cursor: pointer;

  border-style: solid;
  border-color: ${({ theme }) => theme.colors.primary};
  border-width: 0 1px 1px 0;

  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  
  img {
    align-self: center;
  }

  & > ${Radio}:checked {
    background-color: rgba(211, 234, 255, 0.56);
  }
`;

export function RadioInput({
  image,
  alt,
  name,
  id,
  children,
}) {
  return (
    <RadioWrapper>
      {/* eslint-disable-next-line no-console */}
      <Radio type="radio" name={name} id={id} onClick={(e) => console.log(e.target.id)} />
      <img src={image} alt={alt} />
      <Text variant="radioText">
        {children}
      </Text>
    </RadioWrapper>
  );
}

RadioInput.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
