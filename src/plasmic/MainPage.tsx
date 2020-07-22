import * as React from "react";
import { PlasmicSlot } from "@plasmicapp/react-web";

import {
  PlasmicMainPage__RenderHelper,
  PlasmicMainPage__VariantsArgs,
  PlasmicMainPage__ArgsType,
  PlasmicMainPage__TriggerStateType
} from "./__internals__/untitled_project/PlasmicMainPage"; // plasmic-import: QZOzF_lZac/render
import Input from "./Input"; // plasmic-import: J0L08V-7zH/component
import ValidationResultIcon from "./ValidationResultIcon"; // plasmic-import: jOfkMhICa7/component
import Spacer from "./Spacer"; // plasmic-import: iR_D-S5WQ8/component
import FlourishTopLeftsvgIcon from "./__internals__/untitled_project/PlasmicIcon__FlourishTopLeftsvg"; // plasmic-import: pxSJGNxRG/icon
import FlourishRightsvgIcon from "./__internals__/untitled_project/PlasmicIcon__FlourishRightsvg"; // plasmic-import: OIUKwqcWP/icon
import { PlasmicSpacer__VariantsArgs } from "./__internals__/untitled_project/PlasmicSpacer"; // plasmic-import: iR_D-S5WQ8/render
import { PlasmicInput__VariantsArgs } from "./__internals__/untitled_project/PlasmicInput"; // plasmic-import: J0L08V-7zH/render
import { PlasmicValidationResultIcon__VariantsArgs } from "./__internals__/untitled_project/PlasmicValidationResultIcon"; // plasmic-import: jOfkMhICa7/render
import {
  ScreenContext,
  ScreenValue
} from "./__internals__/PlasmicGlobalVariant__Screen"; // plasmic-import: vGne0rgn89CPN/globalVariant
import StreamlineIconsLink from "./StreamlineIconsLink"; // plasmic-import: 8Pj7c1BH86/component
import { PlasmicStreamlineIconsLink__VariantsArgs } from "./__internals__/cloudflare_ip_checker/PlasmicStreamlineIconsLink"; // plasmic-import: 8Pj7c1BH86/render
interface MainPageProps {
  input?: React.ReactNode;
  validationResult?: React.ReactNode; // Required className prop is used for positioning this component
  className?: string;
}

function MainPage(props: MainPageProps) {
  const variants: PlasmicMainPage__VariantsArgs = {};
  const args: PlasmicMainPage__ArgsType = {
    input: props.input,
    validationResult: props.validationResult
  };

  const rh = new PlasmicMainPage__RenderHelper(variants, args, props.className);
  // plasmic-managed-jsx/503
  return (
    <div className={rh.cls1()} style={{ minHeight: "100vh" }}>
      {rh.show25() && (
        <FlourishTopLeftsvgIcon className={rh.cls25()} {...rh.props25()} />
      )}

      <FlourishTopLeftsvgIcon className={rh.cls26()} {...rh.props26()} />
      <FlourishRightsvgIcon className={rh.cls27()} {...rh.props27()} />
      <div className={rh.cls14()}>
        <PlasmicSlot
          defaultContents={"Cloudflare IP Address Checker"}
          value={args.children}
          className={rh.cls$slotChildren()}
        />

        <Spacer {...rh.props16()} className={rh.cls16()} />
        <div className={rh.clsRow()}>
          <PlasmicSlot
            defaultContents={<Input {...rh.props6()} className={rh.cls6()} />}
            value={args.input}
            className={rh.cls$slotInput()}
          />

          <Spacer {...rh.props12()} className={rh.cls12()} />
          <PlasmicSlot
            defaultContents={
              <ValidationResultIcon {...rh.props10()} className={rh.cls10()} />
            }
            value={args.validationResult}
            className={rh.cls$slotValidationResult()}
          />
        </div>
        <Spacer {...rh.props24()} className={rh.cls24()} />
        <div className={rh.cls17()}>
          You can try Cloudflare IPv4 and IPv6 addresses like:
        </div>
        <div className={rh.cls18()}>103.21.244.0</div>
        <div className={rh.cls19()}>2400:cb00:0000::0000</div>
        <Spacer {...rh.props23()} className={rh.cls23()} />
        <div className={rh.cls20()}>{"You can also try ranges like:\n"}</div>
        <div className={rh.cls21()}>{"108.162.192.0/18\n"}</div>
        <div className={rh.cls22()}>2405:8100::/32</div>
      </div>
      <StreamlineIconsLink {...rh.props31()} className={rh.cls31()} />
    </div>
  );
}
export default MainPage as React.FunctionComponent<MainPageProps>;
