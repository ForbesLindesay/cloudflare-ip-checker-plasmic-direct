/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ventExTyscvZpogFdoiw6H
// Component: yIoAz1MvEm
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
import "../untitled_project/plasmic_untitled_project.css"; // plasmic-import: ventExTyscvZpogFdoiw6H/projectcss
import "./PlasmicLink.css"; // plasmic-import: yIoAz1MvEm/css

export type PlasmicLink__VariantsArgs = {};

export type PlasmicLink__GlobalVariantsType = {};

export type PlasmicLink__ArgsType = {};

export type PlasmicLink__TriggerStateType = {};

export class PlasmicLink__RenderHelper {
  constructor(
    readonly variants: PlasmicLink__VariantsArgs,
    readonly args: PlasmicLink__ArgsType,
    readonly rootClassName: string | undefined
  ) {}

  private rawProps1 = () => {
    const args = this.args;
    const variants = this.variants;

    return {
      href: "https://www.streamlineicons.com/" as const
    };
  };

  props1 = (
    modifier?: (
      props: ReturnType<PlasmicLink__RenderHelper["rawProps1"]>
    ) => void
  ) => {
    // [EitzE7G7S, 1]: Don't modify this line
    const props = this.rawProps1();
    if (modifier) {
      modifier(props);
    }
    return props;
  };
  cls1 = () => {
    // [EitzE7G7S, 1]: Don't modify this line

    const args = this.args;
    const variants = this.variants;

    return (
      classNames({
        Link___1__EitzE: true,
        "plasmic-default__a": true,
        "plasmic-default__all": true
      }) +
      " " +
      (this.rootClassName || "")
    );
  };
}

/* plasmic-nameInIdToUuid/503
      [
        [
          "1",
          "EitzE7G7S"
        ]
      ]
      */

/* plasmic-vanilla-jsx/503
         <a className={rh.cls1()} {...rh.props1()} >Streamline Icons</a>
         */
/* prettier-ignore-end */
