/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ventExTyscvZpogFdoiw6H
// Component: iR_D-S5WQ8
import * as React from "react";
import {
  hasVariant,
  createPlasmicElement,
  RenderOpts,
  Override,
  classNames,
  Flex,
  RenderFunc,
  RenderFuncOverrides,
  wrapWithClassName,
  Renderer,
  NodeRenderer,
  createPlasmicElementProxy,
  makeFragment,
  PlasmicIcon,
  PlasmicSlot,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_untitled_project.css"; // plasmic-import: ventExTyscvZpogFdoiw6H/projectcss
import "./PlasmicSpacer.css"; // plasmic-import: iR_D-S5WQ8/css

export type PlasmicSpacer__VariantsArgs = {};

export type PlasmicSpacer__GlobalVariantsType = {};

export type PlasmicSpacer__ArgsType = {};

export type PlasmicSpacer__TriggerStateType = {};

export class PlasmicSpacer__RenderHelper {
  constructor(
    readonly variants: PlasmicSpacer__VariantsArgs,
    readonly args: PlasmicSpacer__ArgsType,
    readonly rootClassName: string | undefined
  ) {}

  private rawPropsSpacer = () => {
    const args = this.args;
    const variants = this.variants;

    return {};
  };

  propsSpacer = (
    modifier?: (
      props: ReturnType<PlasmicSpacer__RenderHelper["rawPropsSpacer"]>
    ) => void
  ) => {
    // [A2oaxKIXw, spacer]: Don't modify this line
    const props = this.rawPropsSpacer();
    if (modifier) {
      modifier(props);
    }
    return props;
  };
  clsSpacer = () => {
    // [A2oaxKIXw, spacer]: Don't modify this line

    const args = this.args;
    const variants = this.variants;

    return (
      classNames({
        Spacer__spacer__A2oax: true,
        "plasmic-default__all": true,
        "plasmic-default__div": true
      }) +
      " " +
      (this.rootClassName || "")
    );
  };
}

/* plasmic-nameInIdToUuid/503
      [
        [
          "Spacer",
          "A2oaxKIXw"
        ]
      ]
      */

/* plasmic-vanilla-jsx/503
         <div className={rh.clsSpacer()}  />
         */
/* prettier-ignore-end */
