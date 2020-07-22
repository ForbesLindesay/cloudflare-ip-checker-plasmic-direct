import * as React from "react";
import {
  hasVariant,
  Stack,
  PlasmicIcon,
  PlasmicSlot
} from "@plasmicapp/react-web";

import {
  PlasmicLink__RenderHelper,
  PlasmicLink__VariantsArgs,
  PlasmicLink__ArgsType,
  PlasmicLink__TriggerStateType
} from "./__internals__/cloudflare_ip_checker/PlasmicLink"; // plasmic-import: yIoAz1MvEm/render

interface LinkProps {
  // Required className prop is used for positioning this component
  className?: string;
}

function Link(props: LinkProps) {
  const variants: PlasmicLink__VariantsArgs = {};
  const args: PlasmicLink__ArgsType = {};
  const rh = new PlasmicLink__RenderHelper(variants, args, props.className);
  // plasmic-managed-jsx/503
  return (
    <a className={rh.cls1()} {...rh.props1()}>
      Streamline Icons
    </a>
  );
}

export default Link as React.FunctionComponent<LinkProps>;
