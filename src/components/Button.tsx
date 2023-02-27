import React from "react";
type Props = {
  text: string;
};
export default function Button({text}:Props) {
  return <button className="bg-teal-500 w-full my-2 p-2 rounded">{text}</button>;
}
