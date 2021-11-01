import React from "react";
import Link from "next/link";

import AskInfoIcon from "components/icons/askInfoIcon";
import MoreAppIcon from "components/icons/moreAppIcon";

import UserMenu from "./UserMenu";

export default function HeaderMainComp() {
  return (
    <header className="bg-white shadow-sm w-full fixed z-10 top-0">
      <div className="max-auto  px-8 py-2 bg-white">
        <div className="flex justify-between">
          <Link href="/home">
            <div className="logo flex items-center space-x-4 mr-10 cursor-pointer">
              <img className="h-8" src="logo.png" alt="logo" />
              <h1 className="text-gray-600 text-2xl">GradeBook</h1>
            </div>
          </Link>
          <div className="menu flex justify-end items-center flex-1 space-x-4">
            <AskInfoIcon />
            <MoreAppIcon />
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
