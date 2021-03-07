const colors = {
  background: '#FFFFFF',
  primary: '#35B6FF',
  secondary: '#000000',
  tertiary: '#FFFFFF',
};

const fontFamily = {
  title: '\'Pattaya\', cursive',
  text: '\'Roboto\', sans-serif',
};

const breakpoints = {
  xs: 0,
  md: 768,
};

const typographyVariants = {
  header: {
    fontSize: {
      xs: '36px',
      md: '72px',
    },
    fontWeight: '400',
    lineHeight: 1.25,
    fontFamily: fontFamily.title,
    color: colors.primary,
  },
  subheader: {
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: 1.25,
    fontFamily: fontFamily.text,
    color: colors.secondary,
  },
  label: {
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: 1.25,
    fontFamily: fontFamily.text,
    color: colors.secondary,
  },
  inputText: {
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: 1.25,
    fontFamily: fontFamily.text,
    color: colors.secondary,
  },
  radioText: {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: 1,
    fontFamily: fontFamily.text,
    color: colors.secondary,
  },
  buttonText: {
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: 1,
    fontFamily: fontFamily.text,
    color: colors.tertiary,
  },
};

export default {
  colors,
  breakpoints,
  fontFamily,
  typographyVariants,
};
