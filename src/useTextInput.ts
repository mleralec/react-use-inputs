import { useState } from "react";

type useTextInputType = (props: {
  state: string;
  type?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  placeholder?: string;
}) => {
  type: string;
  id: string | undefined;
  name: string | undefined;
  placeholder: string | undefined;
  disabled: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const useTextInput: useTextInputType = ({
  state,
  type = "text",
  id,
  name,
  placeholder,
  disabled = false
}) => {
  const [value, setValue] = useState(state);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return {
    type,
    id,
    name,
    disabled,
    placeholder,
    value,
    onChange
  };
};

export { useTextInput };
