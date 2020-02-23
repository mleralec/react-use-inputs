import { useState } from "react";

type useSelectType = (props: {
  state: string;
  id?: string;
  name?: string;
  disabled?: boolean;
}) => {
  id: string | undefined;
  name: string | undefined;
  disabled: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const useSelect: useSelectType = ({ state, id, name, disabled = false }) => {
  const [selected, setSelected] = useState(state);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  };

  return {
    id,
    name,
    disabled,
    value: selected,
    onChange
  };
};

export { useSelect };
