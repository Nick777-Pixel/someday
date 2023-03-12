import React from "react";
type Props = {
  text: string;
  onClick?: () => void;
  full?: boolean;
};
export default function Button({ text, full, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-primary   w-full my-2 ${!full && "max-w-sm"}`}
    >
      {text}
    </button>
  );
}
