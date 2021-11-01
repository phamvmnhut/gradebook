import React, { useEffect, useState } from "react";

import HeaderMainComp from "components/header/HeaderMainComp";

import { useAppDispatch, useAppSelector } from "redux/hooks";
import { fetchMyClassListAsync, selectMyClassList } from "redux/classListSlice";
import { selectToken } from "redux/userSlice";

import NewMenuPopover from "components/home/NewMenuPopover";
import SearchInput from "components/home/SearchInput";
import SideBarMenu from "components/home/SideBarMenu";
import ClassJoinModal from "components/classModal/ClassJoinModal";
import ClassItemComp from "components/classModal/ClassItemComp";
import ClassCreateModalComp from "components/classModal/ClassCreateModal";

export default function HomePage() {
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const [openJoinModal, setOpenJoinModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  const myClasslist = useAppSelector(selectMyClassList);

  useEffect(() => {
    dispatch(fetchMyClassListAsync(token));
  }, []);
  return (
    <React.Fragment>
      <ClassCreateModalComp
        isOpen={openCreateModal}
        setShowModal={setOpenCreateModal}
      />
      <ClassJoinModal isOpen={openJoinModal} setShowModal={setOpenJoinModal} />
      <HeaderMainComp />
      <div className="grid grid-cols-12 mt-20">
        <div className="col-span-2 bg-white h-screen py-5 w-60">
          <NewMenuPopover
            onClickCreateBtn={() => {
              setOpenCreateModal(true);
            }}
            onClickJoinBtn={() => {
              setOpenJoinModal(true);
            }}
          />
          <div className="mt-5">
            <SideBarMenu />
          </div>
        </div>
        {/* Main Page */}
        <div className="col-span-10 ml-4 px-4 w-full pr-10">
          <div className="flex-1">
            <SearchInput />
          </div>
          <hr className="my-2"></hr>
          <div className="mt-5 flex">
            <div className="flex flex-wrap items-center lg:justify-between justify-center pb-10 mt-2">
              {myClasslist.map((e, i) => (
                <ClassItemComp key={i} classItem={e} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
