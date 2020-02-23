# [React use inputs](https://www.npmjs.com/package/react-use-inputs)

Set of hooks to manage your inputs.

## Install

```bash
yarn add react-use-inputs
# or
npm i react-use-inputs
```

---

## Import

```js
import {
  useCheckbox,
  useRadio,
  RadioGroup,
  useSelect,
  useTextInput
} from "react-use-inputs";
```

---

## Usage

### useCheckbox

```jsx
import { useCheckbox } from 'react-use-inputs'

() => {
  const checkbox = useCheckbox({ state: true });
  return <input {...checkbox}>;
}
```

### useRadio

```jsx
import { useRadio, RadioGroup } from "react-use-inputs";

() => {
  const radio = useRadio({ state: "B", name: "test" });
  return (
    <RadioGroup {...radio}>
      <label htmlFor="A">A</label>
      <input value="A" id="A" />

      <label htmlFor="B">B</label>
      <input value="B" id="B" />
    </RadioGroup>
  );
};
```

### useSelect

```jsx
import { useSelect } from "react-use-inputs";

() => {
  const select = useSelect({ state: "A" });

  return (
    <select {...select}>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>
  );
};
```

### useTextInput

```jsx
import { useTextInput } from "react-use-inputs";

() => {
  const textInput = useTextInput({ state: "" });

  return <input {...textInput} />;
};
```

---

## Licence

MIT
