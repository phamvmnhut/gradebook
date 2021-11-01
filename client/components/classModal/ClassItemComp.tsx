import { ClassModel } from "lib/models";
import React from "react";
type AppProp = {
  classItem: ClassModel;
};

export default function ClassItemComp({ classItem }: AppProp) {
  return (
    <div className="mx-2 w-72 lg:mb-0 mt-4">
      <div>
        <img src={classItem.cover} className="w-full h-44 object-cover" />
      </div>
      <div className="bg-white">
        <div>
          <div className="flex items-center">
            <h2 className="text-lg font-semibold">{classItem.className}</h2>
          </div>
          <p className="text-xs text-gray-600 mt-2">{classItem.description}</p>
          <div className="flex mt-2">
            <div>
              <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                Tên giáo viên 1
              </p>
            </div>
            <div className="pl-2">
              <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                Tên giáo viên 2
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
