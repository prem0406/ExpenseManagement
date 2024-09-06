import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const StopRound = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" {...props}>
    <Path
      fill="none"
      stroke="black" //send as prop
      strokeMiterlimit={10}
      strokeWidth={32}
      d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
    />
    <Path d="M310.4 336H201.6a25.62 25.62 0 0 1-25.6-25.6V201.6a25.62 25.62 0 0 1 25.6-25.6h108.8a25.62 25.62 0 0 1 25.6 25.6v108.8a25.62 25.62 0 0 1-25.6 25.6z" />
  </Svg>
);
export default StopRound;
