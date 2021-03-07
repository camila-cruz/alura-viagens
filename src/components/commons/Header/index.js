import styled from 'styled-components';
import Text from '../../foundation/Text';

export const Header = styled(Text)`
  margin-bottom: 16px;
`;

Header.defaultProps = {
  tag: 'h1',
  variant: 'headerXS',
};
