import * as React from "react";

import {
  PlasmicInput__RenderHelper,
  PlasmicInput__VariantsArgs,
  PlasmicInput__ArgsType,
  PlasmicInput__TriggerStateType
} from "./__internals__/untitled_project/PlasmicInput"; // plasmic-import: J0L08V-7zH/render
interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  // Required className prop is used for positioning this component
  className?: string;
}

function Input({ className, ...props }: InputProps) {
  const [focusWithin, setFocusWithin] = React.useState(false);
  const variants: PlasmicInput__VariantsArgs = { focusWithin };
  const args: PlasmicInput__ArgsType = {};
  const rh = new PlasmicInput__RenderHelper(variants, args, className);
  // plasmic-managed-jsx/503
  return (
    <label className={rh.cls2()}>
      <img className={rh.cls3()} {...rh.props3()} />
      <input
        className={rh.clsInput()}
        {...rh.propsInput()}
        style={{ outline: "none" }}
        onFocus={() => setFocusWithin(true)}
        onBlur={() => setFocusWithin(false)}
        {...props}
      />
    </label>
  );
}
export default Input as React.FunctionComponent<InputProps>;
