/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlourishTopLeftsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlourishTopLeftsvgIcon(props: FlourishTopLeftsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 600 600"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {})
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fillRule={"evenodd"} fill={"none"}>
        <circle fill={"currentColor"} r={"22"} cy={"134"} cx={"45"}></circle>

        <circle fill={"currentColor"} r={"22"} cy={"159"} cx={"176"}></circle>

        <path
          d={
            "M246.136719,0 C239.868648,72.3119627 216.51969,126.783317 176.089844,163.414062 C135.659998,200.044808 76.9633831,219.909391 0,223.007813"
          }
          strokeWidth={"8"}
          strokeLinecap={"square"}
          stroke={"currentColor"}
        ></path>

        <path
          d={
            "M163.511719 0C162.306466 53.0702246 148.825347 90.2381933 123.068359 111.503906 97.3113722 132.769619 56.2885857 140.60165-1.42108547e-14 135M408 0C421.248339 101.145778 391.615526 182.812444 319.101562 245 246.587599 307.187556 140.220411 342.153701 0 349.898438"
          }
          strokeWidth={"8"}
          strokeLinecap={"square"}
          stroke={"currentColor"}
        ></path>

        <circle fill={"currentColor"} r={"22"} cy={"68"} cx={"411"}></circle>

        <circle fill={"currentColor"} r={"22"} cy={"506"} cx={"293"}></circle>

        <path
          d={
            "M0,515.675781 C190.951721,546.669561 332.661357,517.872686 425.128906,429.285156 C517.596456,340.697627 555.307393,197.602575 538.261719,0"
          }
          strokeWidth={"8"}
          strokeLinecap={"square"}
          stroke={"currentColor"}
        ></path>
      </g>
    </svg>
  );
}

export default FlourishTopLeftsvgIcon;
/* prettier-ignore-end */
