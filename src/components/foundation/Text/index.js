import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextStyleVariantsMap = {
  header: ({ theme }) => theme.typographyVariants.header,
  subheader: ({ theme }) => theme.typographyVariants.subheader,
  label: ({ theme }) => theme.typographyVariants.label,
  inputText: ({ theme }) => theme.typographyVariants.inputText,
  radioText: ({ theme }) => theme.typographyVariants.radioText,
  buttonText: ({ theme }) => theme.typographyVariants.buttonText,
};

const TextBase = styled.span`
  font-family: ${(props) => TextStyleVariantsMap[props.variant].fontFamily};
  font-size: ${(props) => TextStyleVariantsMap[props.variant].fontSize};
  font-weight: ${(props) => TextStyleVariantsMap[props.variant].fontWeight};
  line-height: ${(props) => TextStyleVariantsMap[props.variant].lineHeight};
`;

export default function Text({ tag, variant, children }) {
  return (
    <TextBase as={tag} variant={variant}>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'label',
  children: null,
};
