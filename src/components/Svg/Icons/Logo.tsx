import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 480 480" {...props}>
      <image width="480" height="480" href="/images/egg/logo.png"/>
    </Svg>
  );
};

export default Icon;
