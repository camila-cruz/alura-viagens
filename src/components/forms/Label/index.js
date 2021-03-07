import styled from 'styled-components';
import Text from '../../foundation/Text';

export const Label = styled(Text)`
  display: block;
  margin-bottom: 8px;
`;

Label.defaultProps = {
  tag: 'label',
  variant: 'label',
};
