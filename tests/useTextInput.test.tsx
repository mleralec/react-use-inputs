import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useTextInput } from "../src";

type TestComponentProps = {
  [key: string]: string | boolean;
};

const TestComponent: React.FC<TestComponentProps> = (props) => {
  const textInput = useTextInput({ ...(props as any) });
  return <input {...textInput} />;
};

describe("useTextInput", () => {
  it("should return default options", () => {
    const { container } = render(<TestComponent state="" />);

    const input = container.querySelector("input");

    expect(input).toBeDefined();
    expect(input.type).toBe("text");
    expect(input.value).toBe("");
    expect(input.disabled).toBeFalsy();
    expect(input.name).toBe("");
    expect(input.placeholder).toBe("");
    expect(input.id).toBe("");
  });

  it("should return custom options", () => {
    const { container } = render(
      <TestComponent state="Hello" id="hello" disabled={true} />
    );

    const input = container.querySelector("input");

    expect(input).toBeDefined();
    expect(input.type).toBe("text");
    expect(input.value).toBe("Hello");
    expect(input.disabled).toBeTruthy();
    expect(input.name).toBe("");
    expect(input.placeholder).toBe("");
    expect(input.id).toBe("hello");
  });

  it("should update state on trigger input", () => {
    const { container } = render(
      <TestComponent state="Hello" id="hello" disabled={true} />
    );

    const input = container.querySelector("input");

    expect(input.value).toBe("Hello");

    fireEvent.change(input, { target: { value: "Hell" } });

    expect(input.value).toBe("Hell");
  });
});
