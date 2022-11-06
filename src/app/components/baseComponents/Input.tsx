import React from "react";
import FormControl from "react-bootstrap/FormControl";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  value: string;
  className?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  onChange,
  label,
  value,
  className,
  placeholder,
}) => {
  return (
    <div>
      {label && <div>{label}</div>}
      <FormControl
        type="text"
        value={value}
        onChange={(e: any) => onChange(e)}
        className={className}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
