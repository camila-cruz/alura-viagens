import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';

const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

const Input = styled(Text)`
  width: 100%;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 14px 6px;
  outline: 0;

  &:focus {
    box-shadow: 0 0 3pt 2pt ${({ theme }) => theme.colors.primary};
  }
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'inputText',
};

export default function TextField({ placeholder, id, type }) {
  return (
    <InputWrapper>
      <Input placeholder={placeholder} id={id} type={type} />
    </InputWrapper>
  );
}

TextField.defaultProps = {
  placeholder: '',
  type: 'text',
};

TextField.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};
