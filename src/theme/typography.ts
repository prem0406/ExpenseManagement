import {Platform} from 'react-native';

const fonts = {
  openSans: {
    light: 'open-sans.light',
    normal: 'open-sans.regular',
    semibold: 'open-sans.semibold',
    bold: 'open-sans.bold',
  },
  pass: {
    normal: 'Glyphter', //TODO: add this font
  },
};

const FONT_SIZES = {
  fontSize_01: 10,
  fontSize_02: 12,
  fontSize_03: 16,
  fontSize_04: 20,
  fontSize_05: 24,
  fontSize_06: 32,
};

const LINE_HEIGHTS = {
  lineHeight_01: 16,
  lineHeight_02: 24,
  lineHeight_03: 28,
  lineHeight_04: 36,
};

const FONT_STYLES = {
  fontStyle_01: {
    fontSize: FONT_SIZES.fontSize_01,
    lineHeight: LINE_HEIGHTS.lineHeight_01,
  },
  fontStyle_02: {
    fontSize: FONT_SIZES.fontSize_02,
    lineHeight: LINE_HEIGHTS.lineHeight_01,
  },
  fontStyle_03: {
    fontSize: FONT_SIZES.fontSize_03,
    lineHeight: LINE_HEIGHTS.lineHeight_02,
  },
  fontStyle_04: {
    fontSize: FONT_SIZES.fontSize_04,
    lineHeight: LINE_HEIGHTS.lineHeight_02,
  },
  fontStyle_05: {
    fontSize: FONT_SIZES.fontSize_05,
    lineHeight: LINE_HEIGHTS.lineHeight_03,
  },
  fontStyle_06: {
    fontSize: FONT_SIZES.fontSize_06,
    lineHeight: LINE_HEIGHTS.lineHeight_04,
  },
};

export const typography = {
  fonts,
  FONT_STYLES,
  code: Platform.select({ios: fonts.pass, android: fonts.openSans}),
};
