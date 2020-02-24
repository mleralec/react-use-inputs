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

const parseChildrens = (child: any, props: any): any => {
  if (child.type === "input") {
    return React.cloneElement(child, {
      type: "radio",
      checked: props.value === child.props.value,
      name: props.name,
      onChange: props.onChange
    });
  }

  if (child.props && child.props.children) {
    return React.cloneElement(child, child.props, [
      ...React.Children.map(child.props.children, c => parseChildrens(c, props))
    ]);
  }

  return child;
};

const RadioGroup = ({ children, ...props }: RadioGroupProps) => {
  const childrens = React.Children.map(children, child => {
    return parseChildrens(child, props);
  });

  return childrens;
};

export { useRadio, RadioGroup };
