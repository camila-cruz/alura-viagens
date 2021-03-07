import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import Text from '../../foundation/Text';

export const Button = styled(Text)`
  width: 100%;
  height: 60px;

  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 10px;
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: brightness(0.9);
  }

  &:focus {
    box-shadow: 0 0 3pt 2pt #004871;
  }

  ${breakpointsMedia({
    xs: css`
      margin-top: 16px;
    `,
    md: css`
      margin-top: 0px;
    `,
  })}
`;

Button.defaultProps = {
  tag: 'button',
  variant: 'buttonText',
};
