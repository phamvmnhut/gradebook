import React from "react";

import ClassIcon from "components/icons/classIcon";
import DeadlineIcon from "components/icons/deadlineIcon";
import SettingIcon from "components/icons/settingIcon";

export default function SideBarMenu() {
  return (
    <React.Fragment>
      <div className="bg-blue-50 mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold">
        <button className="text-blue-500 text-sm font-semibold flex items-center focus:outline-none">
          <ClassIcon />
          <span className="ml-2">All My Class</span>
        </button>
      </div>
      <div className="mt-1 mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold">
        <button className="text-gray-600  text-sm font-semibold flex items-center focus:outline-none">
          <DeadlineIcon />
          <span className="ml-2">My Deadline</span>
        </button>
      </div>
      <hr className="my-2" />
      <div className="mt-1 mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold">
        <button className="text-gray-600  text-sm font-semibold flex items-center focus:outline-none">
          <SettingIcon />
          <span className="ml-2">Settings</span>
        </button>
      </div>
    </React.Fragment>
  );
}
