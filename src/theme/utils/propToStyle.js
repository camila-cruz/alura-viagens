import { breakpointsMedia } from './breakpointsMedia';

export function propToStyle(propName) {
  return (props) => {
    // eslint-disable-next-line react/destructuring-assignment
    const propValue = props[propName]; // String ou objeto

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        [propName]: propValue,
      };
    }

    if (typeof propValue === 'object') {
      return breakpointsMedia({
        xs: {
          [propName]: propValue.xs,
        },
        md: {
          [propName]: propValue.md,
        },
      });
    }
    return null;
  };
}
