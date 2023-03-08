import React from "react";
type Props = {
  placeholder: string;
  value?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  full?: boolean;
};

export default function TextInput({
  placeholder,
  value,
  label,
  onChange,
  full,
}: Props) {
  return (
    <div>
      {label && <label className="label">{label}</label>}
      <input
        type="text"
        placeholder={placeholder}
        className={`input input-bordered input-primary w-full ${
          !full && "max-w-sm"
        } my-2`}
      />
    </div>
  );
}
