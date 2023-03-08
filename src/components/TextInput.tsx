import React from "react";
type Props = {
  placeholder: string;
  value?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  full?: boolean;
  type ?: string
};

export default function TextInput({
  placeholder,
  value,
  label,
  onChange,
  full,
  type
}: Props) {
  return (
    <div>
      {label && <label className="label">{label}</label>}
      <input
        type={type||"text"}
        onChange={onChange}
        placeholder={placeholder}
        className={`input input-bordered input-primary w-full ${
          !full && "max-w-sm"
        } my-2`}
      />
    </div>
  );
}
