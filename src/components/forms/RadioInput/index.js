import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';

const Radio = styled.input`
  position: absolute;
  width: 0px;
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

  ${({ checked }) => checked && css`background: rgba(211, 234, 255, 0.56);`}
`;

export function RadioInput({
  image,
  alt,
  name,
  id,
  checked,
  onChange,
  children,
}) {
  return (
    <RadioWrapper checked={checked}>
      {/* eslint-disable-next-line no-console */}
      <Radio
        type="radio"
        name={name}
        id={id}
        onChange={onChange}
      />
      <img src={image} alt={alt} />
      <Text variant="radioText">
        {children}
      </Text>
    </RadioWrapper>
  );
}

RadioInput.defaultProps = {
  checked: false,
  onChange: null,
};

RadioInput.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node.isRequired,
};
