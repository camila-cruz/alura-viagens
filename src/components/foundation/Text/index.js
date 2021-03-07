import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextBase = styled.span`
  font-family: ${(props) => props.theme.typographyVariants[props.variant].fontFamily};
  font-size: ${(props) => props.theme.typographyVariants[props.variant].fontSize};
  font-weight: ${(props) => props.theme.typographyVariants[props.variant].fontWeight};
  line-height: ${(props) => props.theme.typographyVariants[props.variant].lineHeight};
  color: ${(props) => props.theme.typographyVariants[props.variant].color};
`;

export default function Text({
  tag,
  variant,
  children,
  ...props
}) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TextBase as={tag} variant={variant} {...props}>
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
