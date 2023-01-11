const colorKeys = {
  primary: 'primary',
  accent: 'accent',
  accentLight: 'accentLight',
  accentBackground: 'accentBackground',
  textBlack: 'textBlack',
  gradientButton: 'gradientButton',
  bodyBackground: 'bodyBackground',
  backgroundGrey: 'backgroundGrey',
  wishIconRed: 'wishIconRed',
};

const siteColors = {
  [colorKeys.primary]: '#01604B', //white passes the accessibility test
  [colorKeys.accent]: '#BACF69', //
  [colorKeys.accentLight]: '#01D0AA', //black passes
  [colorKeys.accentBackground]: '#F1FFFC', // primary color passes accessibility
  [colorKeys.textBlack]: '#343434',
  [colorKeys.gradientButton]: 'white',
  [colorKeys.bodyBackground]: '#FDFDFD',
  [colorKeys.backgroundGrey]: '#606060',
  [colorKeys.wishIconRed]: '#FF4747',
};

exports.siteColors = siteColors;
exports.colorKeys = colorKeys;
