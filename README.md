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

#### Simple example

```jsx
import { useCheckbox } from 'react-use-inputs'

() => {
  const checkbox = useCheckbox({ state: true });
  return <input {...checkbox}>;
}
```

#### Access value

```jsx
import { useCheckbox } from 'react-use-inputs'

() => {
  const checkbox = useCheckbox({ state: true });
  const value = checkbox.checked;
  return <input {...checkbox}>;
}
```

#### Trigger manually

```jsx
import { useCheckbox } from 'react-use-inputs'

() => {
  const checkbox = useCheckbox({ state: true });
  return (
    <>
      <input {...checkbox}>
      <button type="button" onClick={checkbox.onChange}>Trigger</button>
    </>
  );
}
```

#### Options

```ts
useCheckbox({
  state: boolean;
  disabled?: boolean = false;
  id?: string;
  name?: string;
})
```

---

### useRadio

#### Simple example

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

#### Access value

```jsx
import { useRadio, RadioGroup } from "react-use-inputs";

() => {
  const radio = useRadio({ state: "B", name: "test" });
  const value = radio.value;
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

#### Trigger manually

```jsx
import { useRadio, RadioGroup } from "react-use-inputs";

() => {
  const radio = useRadio({ state: "B", name: "test" });
  return (
    <>
      <RadioGroup {...radio}>
        <label htmlFor="A">A</label>
        <input value="A" id="A" />

        <label htmlFor="B">B</label>
        <input value="B" id="B" />
      </RadioGroup>
      <button type="button" onClick={() => radio.onChange("B")}>
        Reset value to "B"
      </button>
    </>
  );
};
```

#### Options

```ts
useRadio({
  state: string;
  name: string;
})
```

---

### useSelect

#### Simple example

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

#### Access value

```jsx
import { useSelect } from "react-use-inputs";

() => {
  const select = useSelect({ state: "A" });
  const value = select.value;
  return (
    <select {...select}>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>
  );
};
```

#### Trigger manually

```jsx
import { useSelect } from "react-use-inputs";

() => {
  const select = useSelect({ state: "A" });
  return (
    <>
      <select {...select}>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <button type="button" onClick={() => select.onChange("B")}>
        Reset value to "B"
      </button>
    </>
  );
};
```

#### Options

```ts
useSelect({
  state: string;
  id?: string;
  name?: string;
  disabled?: boolean = false;
})

```

---

### useTextInput

#### Simple example

```jsx
import { useTextInput } from "react-use-inputs";

() => {
  const textInput = useTextInput({ state: "" });
  return <input {...textInput} />;
};
```

#### Access value

```jsx
import { useTextInput } from "react-use-inputs";

() => {
  const textInput = useTextInput({ state: "" });
  const value = textInput.value;
  return <input {...textInput} />;
};
```

#### Trigger manually

```jsx
import { useTextInput } from "react-use-inputs";

() => {
  const textInput = useTextInput({ state: "" });
  return (
    <>
      <input {...textInput} />
      <button type="button" onClick={() => textInput.onChange("")}>
        Reset
      </button>
    </>
  );
};
```

#### Options

```ts
useTextInput({
  state: string;
  type?: string = 'text';
  disabled?: boolean = false;
  id?: string;
  name?: string;
  placeholder?: string;
})
```

## Licence

MIT
