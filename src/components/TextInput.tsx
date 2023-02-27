import React from "react";
type Props = {
  placeholder: string;
  value: string;
  label: string;
};

export default function TextInput({ placeholder, value, label }: Props) {
  return (
    <div className="my-2">
      {label}
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        className="p-2 w-full border rounded"
      />
    </div>
  );
}
