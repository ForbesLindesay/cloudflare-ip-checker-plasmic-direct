import * as React from "react";

import {
  PlasmicSpacer__RenderHelper,
  PlasmicSpacer__VariantsArgs,
  PlasmicSpacer__ArgsType,
  PlasmicSpacer__TriggerStateType
} from "./__internals__/untitled_project/PlasmicSpacer"; // plasmic-import: iR_D-S5WQ8/render
interface SpacerProps {
  // Required className prop is used for positioning this component
  className?: string;
}

function Spacer(props: SpacerProps) {
  const variants: PlasmicSpacer__VariantsArgs = {};
  const args: PlasmicSpacer__ArgsType = {};
  const rh = new PlasmicSpacer__RenderHelper(variants, args, props.className);
  // plasmic-managed-jsx/503
  return <div className={rh.clsSpacer()} />;
}
export default Spacer as React.FunctionComponent<SpacerProps>;
