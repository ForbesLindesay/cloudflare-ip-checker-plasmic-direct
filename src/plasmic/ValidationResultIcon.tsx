import * as React from "react";

import {
  PlasmicValidationResultIcon__RenderHelper,
  PlasmicValidationResultIcon__VariantsArgs,
  PlasmicValidationResultIcon__ArgsType,
  PlasmicValidationResultIcon__TriggerStateType
} from "./__internals__/untitled_project/PlasmicValidationResultIcon"; // plasmic-import: jOfkMhICa7/render
interface ValidationResultIconProps {
  // Required className prop is used for positioning this component
  className?: string;
  status?: "valid" | "invalid";
}

function ValidationResultIcon(props: ValidationResultIconProps) {
  const variants: PlasmicValidationResultIcon__VariantsArgs = {
    status: props.status
  };

  const args: PlasmicValidationResultIcon__ArgsType = {};
  const rh = new PlasmicValidationResultIcon__RenderHelper(
    variants,
    args,
    props.className
  );

  // plasmic-managed-jsx/503
  return (
    <div className={rh.cls1()}>
      <div className={rh.cls2()}>{rh.childStr2()}</div>
    </div>
  );
}
export default ValidationResultIcon as React.FunctionComponent<
  ValidationResultIconProps
>;
