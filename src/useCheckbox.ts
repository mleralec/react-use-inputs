import { useState } from "react";

type useCheckboxType = (options: {
  state: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
}) => {
  type: string;
  id: string | undefined;
  name: string | undefined;
  disabled: boolean;
  checked: boolean;
  onChange: () => void;
};

const useCheckbox: useCheckboxType = ({
  state,
  disabled = false,
  id,
  name
}) => {
  const [checked, setChecked] = useState(state);

  const onChange = () => setChecked(!checked);

  return { type: "checkbox", id, name, disabled, checked, onChange };
};

export { useCheckbox };
