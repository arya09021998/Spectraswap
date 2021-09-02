import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 30 30" {...props}>
      <image width="30" height="30" href={'/logo.png'}/>
    </Svg>
  );
};

export default Icon;
