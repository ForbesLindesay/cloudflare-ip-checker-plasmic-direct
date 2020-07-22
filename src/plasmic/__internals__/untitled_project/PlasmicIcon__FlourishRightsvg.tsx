/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlourishRightsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlourishRightsvgIcon(props: FlourishRightsvgIconProps) {
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
        <path
          d={
            "M600,10 C428,87.8171832 342,184.650516 342,300.5 C342,416.349484 428,513.182817 600,591"
          }
          strokeWidth={"8"}
          strokeLinecap={"square"}
          stroke={"currentColor"}
        ></path>

        <path
          d={
            "M600,59 C477.195312,138.833333 415.792969,218.666667 415.792969,298.5 C415.792969,378.333333 477.195312,458.166667 600,538"
          }
          strokeWidth={"8"}
          strokeLinecap={"square"}
          stroke={"currentColor"}
        ></path>

        <path
          d={
            "M600,135 C535.049479,175.662283 502.574219,228.096293 502.574219,292.302031 C502.574219,356.507769 535.049479,411.407092 600,457"
          }
          strokeWidth={"8"}
          strokeLinecap={"square"}
          stroke={"currentColor"}
        ></path>

        <circle fill={"currentColor"} r={"22"} cy={"120"} cx={"430"}></circle>

        <circle fill={"currentColor"} r={"22"} cy={"267"} cx={"422"}></circle>

        <circle fill={"currentColor"} r={"22"} cy={"377"} cx={"525"}></circle>
      </g>
    </svg>
  );
}

export default FlourishRightsvgIcon;
/* prettier-ignore-end */
