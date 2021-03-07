import styled from 'styled-components';
import { propToStyle } from '../../../../theme/utils/propToStyle';

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.3);

  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('alignItems')}
  ${propToStyle('justifyContent')}
  ${propToStyle('margin')}
  ${propToStyle('width')}
  ${propToStyle('maxWidth')}
  ${propToStyle('paddingLeft')}
  ${propToStyle('paddingRight')}
  ${propToStyle('paddingTop')}
  ${propToStyle('paddingBottom')}
`;
