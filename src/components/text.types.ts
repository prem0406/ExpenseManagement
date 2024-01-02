import {TextStyle} from 'react-native';
import {typography} from '../theme/typography';

export type Weights = 'light' | 'normal' | 'semibold' | 'bold';

export const $fontWeightStyles = Object.entries(
  typography.fonts.openSans,
).reduce((acc, [weight, fontFamily]) => {
  return {...acc, [weight]: {fontFamily}};
}, {}) as Record<Weights, TextStyle>;
