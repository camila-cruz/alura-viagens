import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RadioGroupWrapper = styled.div`
  max-width: 375px;
  display: flex;
  margin-bottom: 18px;

  border-style: solid;
  border-color: ${({ theme }) => theme.colors.primary};
  border-width: 1px 0 0 1px;
  border-radius: 10px;
`;

export default function RadioGroup({ children }) {
  return (
    <RadioGroupWrapper>
      {children}
    </RadioGroupWrapper>
  );
}

RadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
