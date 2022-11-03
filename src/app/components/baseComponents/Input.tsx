import React, { Component } from "react";
import FormControl from "react-bootstrap/FormControl";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  value: string;
}

const Input: React.FC<InputProps> = ({ onChange, label, value }) => {
  return (
    <div>
      {label && <div>{label}</div>}
      <FormControl
        type="text"
        value={value}
        onChange={(e: any) => onChange(e)}
      />
    </div>
  );
};

export default Input;
