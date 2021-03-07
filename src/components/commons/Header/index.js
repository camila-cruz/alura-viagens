import styled from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';
import Text from '../../foundation/Text';

export const Header = styled(Text)`
  margin-bottom: 16px;

  ${propToStyle('width')}
  ${propToStyle('maxWidth')}
  ${propToStyle('margin')}
`;

Header.defaultProps = {
  tag: 'h1',
  variant: 'header',
};
