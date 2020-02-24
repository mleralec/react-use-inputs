import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useRadio, RadioGroup } from "../src";

type TestComponentProps = {
  [key: string]: string | boolean;
};

const options = ["blue", "green", "orange"];

const TestComponent: React.FC<TestComponentProps> = props => {
  const radio = useRadio({ ...(props as any) });
  return (
    <>
      <span id="value">{radio.value}</span>
      <RadioGroup {...radio}>
        {options.map(o => (
          <div key={o}>
            <input value={o} id={o} />
            <label key={o} htmlFor={o}>
              {o}
            </label>
          </div>
        ))}
      </RadioGroup>
      <button onClick={() => radio.onChange(options[2])}>
        Reset to orange
      </button>
    </>
  );
};

it("should return default options", () => {
  const { container } = render(
    <TestComponent state={options[0]} name="test-radio" />
  );

  const radios = container.querySelectorAll("input");
  const value = container.querySelector("#value");

  expect(radios.length).toBe(options.length);
  options.forEach((option, index) => {
    expect(option).toBe(radios[index].value);
  });
  expect(value.textContent).toBe(options[0]);
});

it("should update value on trigger radio button", () => {
  const { container } = render(
    <TestComponent state={options[0]} name="test-radio" />
  );

  const radios = container.querySelectorAll("input");
  const value = container.querySelector("#value");

  expect(radios.length).toBe(options.length);
  expect(value.textContent).toBe(options[0]);

  fireEvent.click(radios[1]);
  expect(value.textContent).toBe(options[1]);

  fireEvent.click(radios[0]);
  expect(value.textContent).toBe(options[0]);

  fireEvent.click(radios[2]);
  expect(value.textContent).toBe(options[2]);
});

it("should update value on trigger labels", () => {
  const { container } = render(
    <TestComponent state={options[0]} name="test-radio" />
  );

  const labels = container.querySelectorAll("label");
  const value = container.querySelector("#value");

  expect(labels.length).toBe(options.length);
  expect(value.textContent).toBe(options[0]);

  fireEvent.click(labels[1]);
  expect(value.textContent).toBe(options[1]);

  fireEvent.click(labels[0]);
  expect(value.textContent).toBe(options[0]);

  fireEvent.click(labels[2]);
  expect(value.textContent).toBe(options[2]);
});

it("should reset value on trigger reset button", () => {
  const { container } = render(
    <TestComponent state={options[0]} name="test-radio" />
  );

  const button = container.querySelector("button");
  const value = container.querySelector("#value");

  expect(value.textContent).toBe(options[0]);
  fireEvent.click(button);
  expect(value.textContent).toBe(options[2]);
});
