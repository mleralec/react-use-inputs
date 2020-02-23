import React from "react";

declare type useCheckboxType = (options: {
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

export declare const useCheckbox: useCheckboxType;

declare type useRadioType = (options: {
  state: string;
  name?: string;
}) => {
  value: string;
  name: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement> | string) => void;
};

export declare const useRadio: useRadioType;

declare type RadioGroupProps = {
  value: string;
  name?: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children: JSX.Element | JSX.Element[] | any;
};

export declare const RadioGroup: (props: RadioGroupProps) => any;

declare type useSelectType = (options: {
  state: string;
  id?: string;
  name?: string;
  disabled?: boolean;
}) => {
  id: string | undefined;
  name: string | undefined;
  disabled: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement> | string) => void;
};

export declare const useSelect: useSelectType;

declare type useTextInputType = (options: {
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
  onChange: (event: React.ChangeEvent<HTMLInputElement> | string) => void;
};

export declare const useTextInput: useTextInputType;
