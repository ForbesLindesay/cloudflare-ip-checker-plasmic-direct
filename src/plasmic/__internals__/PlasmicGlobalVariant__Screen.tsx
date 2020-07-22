import React from "react";
export type ScreenValue = "lg";
export const ScreenContext = React.createContext<ScreenValue | undefined>(
  undefined
);

const screenVariants: ScreenValue[] = ["lg"];
const screenQueries = ["(min-width:850px)"];

function matchScreenVariant() {
  const index = screenQueries.findIndex(q => window.matchMedia(q).matches);
  return index >= 0 ? screenVariants[index] : undefined;
}

export function ScreenVariantProvider(props: { children?: React.ReactNode }) {
  const [value, setValue] = React.useState(matchScreenVariant());
  React.useEffect(() => {
    const handler = () => {
      const newValue = matchScreenVariant();
      if (newValue !== value) {
        setValue(newValue);
      }
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [value]);
  return (
    <ScreenContext.Provider value={value}>
      {props.children}
    </ScreenContext.Provider>
  );
}

export default ScreenContext;
