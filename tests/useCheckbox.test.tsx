import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useCheckbox } from "../src";

type TestComponentProps = {
  [key: string]: string | boolean;
};

const TestComponent: React.FC<TestComponentProps> = props => {
  const checkbox = useCheckbox({ ...(props as any) });
  return (
    <>
      <label htmlFor={props.id ? (props.id as string) : ""}>Label</label>
      <input {...checkbox} />
      <button onClick={checkbox.onChange}>Toggle</button>
    </>
  );
};

it("should return default options", () => {
  const { container } = render(<TestComponent state={false} />);

  const checkbox = container.querySelector("input");

  expect(checkbox.type).toBe("checkbox");
  expect(checkbox.checked).toBeFalsy();
  expect(checkbox.disabled).toBeFalsy();
  expect(checkbox.id).toBe("");
  expect(checkbox.name).toBe("");
});

it("should return custom options", () => {
  const { container } = render(
    <TestComponent id="test-id" name="checkbox" state={true} disabled={true} />
  );

  const checkbox = container.querySelector("input");

  expect(checkbox.type).toBe("checkbox");
  expect(checkbox.checked).toBeTruthy();
  expect(checkbox.disabled).toBeTruthy();
  expect(checkbox.id).toBe("test-id");
  expect(checkbox.name).toBe("checkbox");
});

it("should update state on trigger", () => {
  const { container } = render(<TestComponent id="test-id" state={false} />);

  const checkbox = container.querySelector("input");
  const label = container.querySelector("label");
  const button = container.querySelector("button");

  expect(checkbox.type).toBe("checkbox");
  expect(checkbox.checked).toBeFalsy();

  fireEvent.click(checkbox);
  expect(checkbox.checked).toBeTruthy();

  fireEvent.click(button);
  expect(checkbox.checked).toBeFalsy();

  fireEvent.click(label);
  expect(checkbox.checked).toBeTruthy();
});

it("should not update state on trigger label without id", () => {
  const { container } = render(<TestComponent state={false} />);

  const checkbox = container.querySelector("input");
  const label = container.querySelector("label");

  expect(checkbox.type).toBe("checkbox");
  expect(checkbox.checked).toBeFalsy();

  fireEvent.click(label);
  expect(checkbox.checked).toBeFalsy();
});
