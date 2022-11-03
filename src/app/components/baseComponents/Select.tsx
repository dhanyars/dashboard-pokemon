import React, { Component } from "react";
import Form from "react-bootstrap/Form";

interface SelectProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  options: any;
  value: string | number;
}

const Select: React.FC<SelectProps> = ({ onChange, label, options, value }) => {
  return (
    <div>
      <div>{label}</div>
      <Form.Select value={value} onChange={(e) => onChange(e)}>
        {options.map((item: any) => (
          <option value={item.value}>{item.text}</option>
        ))}
      </Form.Select>
    </div>
  );
};

export default Select;
