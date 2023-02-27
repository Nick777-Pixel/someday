import React from "react";
type Props = {
  text: string;
  onClick?: () => void;
};
export default function Button({ text, onClick }: Props) {
  return (
    <button onClick={onClick} className="bg-teal-500 w-full my-2 p-2 rounded">
      {text}
    </button>
  );
}
