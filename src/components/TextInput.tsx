import React from "react";
type Props = {
  placeholder: string;
  value: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TextInput({ placeholder, value, label,onChange }: Props) {
  return (
    <div className="my-2">
      {label}
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="p-2 w-full border rounded"
      />
    </div>
  );
}
