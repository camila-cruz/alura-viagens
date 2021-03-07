const colors = {
  background: '#FFFFFF',
  primary: '#35B6FF',
  secondary: '#000000',
};

const fontFamily = {
  title: '\'Pattaya\', cursive',
  text: '\'Roboto\', sans-serif',
};

const typographyVariants = {
  headerXS: {
    fontSize: '36px',
    fontWeight: '400',
    lineHeight: 1.25,
    fontFamily: fontFamily.title,
  },
  headerMD: {
    fontSize: '72px',
    fontWeight: '400',
    lineHeight: 1.25,
    fontFamily: fontFamily.title,
  },
  subheader: {
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: 1.25,
    fontFamily: fontFamily.text,
  },
  label: {
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: 1.25,
    fontFamily: fontFamily.text,
  },
  inputText: {
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: 1.25,
    fontFamily: fontFamily.text,
  },
  radioText: {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: 1,
    fontFamily: fontFamily.text,
  },
  buttonText: {
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: 1,
    fontFamily: fontFamily.text,
  },
};

export default {
  colors,
  fontFamily,
  typographyVariants,
};
