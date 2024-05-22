import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const HomeTabIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill={props.fill}
      stroke={props.stroke}
      strokeLinecap="round"
      strokeWidth={1.8}
      d="M3 11.023v6.384C3 19.943 5.015 22 7.5 22h9c2.485 0 4.5-2.057 4.5-4.593v-6.384a4.631 4.631 0 0 0-1.65-3.556L13.425 2.52a2.215 2.215 0 0 0-2.85 0L4.65 7.467A4.631 4.631 0 0 0 3 11.023Z"
    />
  </Svg>
);
export default HomeTabIcon;
