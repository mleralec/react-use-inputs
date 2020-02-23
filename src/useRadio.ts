import React, { useState } from "react";

type useRadioType = (options: {
  state: string;
  name: string;
}) => {
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement> | string) => void;
};

const useRadio: useRadioType = ({ state, name }) => {
  const [selected, setSelected] = useState(state);

  const onChange = (event: React.ChangeEvent<HTMLInputElement> | string) => {
    if (typeof event === "string") {
      setSelected(event);
    } else {
      setSelected(event.target.value);
    }
  };

  return {
    value: selected,
    name,
    onChange
  };
};

type RadioGroupProps = {
  value: string;
  name?: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children: JSX.Element | JSX.Element[] | any;
};

const RadioGroup = ({ value, name, onChange, children }: RadioGroupProps) => {
  return React.Children.map(children, child => {
    if (child.type === "input") {
      return React.cloneElement(child, {
        type: "radio",
        checked: value === child.props.value,
        name,
        onChange
      });
    }
    return child;
  });
};

export { useRadio, RadioGroup };
