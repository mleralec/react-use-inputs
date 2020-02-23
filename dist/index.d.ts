import React from "react";

declare type useCheckboxType = (props: {
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

declare type useRadioType = (props: {
  state: string;
  name?: string;
}) => {
  value: string;
  name: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export declare const useRadio: useRadioType;

declare type useSelectType = (props: {
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

export declare const useSelect: useSelectType;

declare type useTextInputType = (props: {
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

export declare const useTextInput: useTextInputType;
