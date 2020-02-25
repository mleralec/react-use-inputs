import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useSelect } from "../src";

type TestComponentProps = {
  [key: string]: string | boolean;
};

const options = ["blue", "green", "orange"];

const TestComponent: React.FC<TestComponentProps> = props => {
  const select = useSelect({ ...(props as any) });
  return (
    <>
      <select {...select}>
        {options.map(o => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <button onClick={() => select.onChange("orange")}>Toggle</button>
    </>
  );
};

it("should return default options", () => {
  const { container } = render(<TestComponent state={options[0]} />);

  const select = container.querySelector("select");

  expect(select).toBeDefined();
  expect(select.value).toBe(options[0]);
  expect(select.disabled).toBeFalsy();
  expect(select.id).toBe("");
  expect(select.name).toBe("");
});

it("should return custom options", () => {
  const { container } = render(
    <TestComponent
      state={options[1]}
      id="test-id"
      name="test-name"
      disabled={true}
    />
  );

  const select = container.querySelector("select");

  expect(select).toBeDefined();
  expect(select.value).toBe(options[1]);
  expect(select.disabled).toBeTruthy();
  expect(select.id).toBe("test-id");
  expect(select.name).toBe("test-name");
});

it("should update state on trigger option", () => {
  const { container } = render(<TestComponent state={options[0]} />);

  const select = container.querySelector("select");
  const htmlOptions = container.querySelectorAll("option");

  expect(select).toBeDefined();
  expect(htmlOptions.length).toBe(options.length);
  expect(select.value).toBe(options[0]);

  fireEvent.change(select, { target: { value: options[1] } });
  expect(select.value).toBe(options[1]);
});

it("should update state on trigger button", () => {
  const { container } = render(<TestComponent state={options[0]} />);

  const select = container.querySelector("select");
  const button = container.querySelector("button");

  expect(select).toBeDefined();
  expect(select.value).toBe(options[0]);

  fireEvent.click(button);
  expect(select.value).toBe(options[2]);
});
