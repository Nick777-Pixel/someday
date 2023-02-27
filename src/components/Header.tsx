import React from "react";
import { useUserData } from "@nhost/react";

export default function Header() {
  const user = useUserData();
  console.log(user);
  return (
    <div className="flex justify-between p-5 font-roboto-mono items-center">
      <div>
        someday
      </div>
      <img src={user?.avatarUrl} className="rounded-full w-10 h-10" alt="" />
    </div>
  );
}
