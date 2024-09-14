import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ChecvronBack = props => (
  <Svg viewBox="0 0 512 512" {...props}>
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={48}
      d="M328 112 184 256l144 144"
    />
  </Svg>
);

export default ChecvronBack;
