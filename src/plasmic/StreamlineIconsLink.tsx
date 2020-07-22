import * as React from "react";
import {
  hasVariant,
  Stack,
  PlasmicIcon,
  PlasmicSlot
} from "@plasmicapp/react-web";

import {
  PlasmicStreamlineIconsLink__RenderHelper,
  PlasmicStreamlineIconsLink__VariantsArgs,
  PlasmicStreamlineIconsLink__ArgsType,
  PlasmicStreamlineIconsLink__TriggerStateType
} from "./__internals__/cloudflare_ip_checker/PlasmicStreamlineIconsLink"; // plasmic-import: 8Pj7c1BH86/render
import Link from "./Link"; // plasmic-import: yIoAz1MvEm/component
import { PlasmicLink__VariantsArgs } from "./__internals__/cloudflare_ip_checker/PlasmicLink"; // plasmic-import: yIoAz1MvEm/render

interface StreamlineIconsLinkProps {
  // Required className prop is used for positioning this component
  className?: string;
}

function StreamlineIconsLink(props: StreamlineIconsLinkProps) {
  const variants: PlasmicStreamlineIconsLink__VariantsArgs = {};
  const args: PlasmicStreamlineIconsLink__ArgsType = {};
  const rh = new PlasmicStreamlineIconsLink__RenderHelper(
    variants,
    args,
    props.className
  );

  // plasmic-managed-jsx/503
  return (
    <div className={rh.cls1()}>
      <div className={rh.cls2()}>{"Icon by "}</div>
      <Link {...rh.props4()} className={rh.cls4()} />
    </div>
  );
}

export default StreamlineIconsLink as React.FunctionComponent<
  StreamlineIconsLinkProps
>;
