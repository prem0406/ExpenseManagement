import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const MenuOutline = props => (
  <Svg viewBox="0 0 512 512" {...props}>
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={32}
      d="M80 160h352M80 256h352M80 352h352"
    />
  </Svg>
);
export default MenuOutline;