import classListApi from "api/classApi";
import utilApi from "api/utilApi";
import { ClassModel } from "lib/models";
import React, { useEffect, useState } from "react";
import { fetchMyClassListAsync } from "redux/classListSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";
import Swal from "sweetalert2";

type AppProps = {
  isOpen: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ClassCreateModalComp = ({ isOpen, setShowModal }: AppProps) => {
  const [className, setClassName] = useState<string>("");
  const [classDes, setClassDes] = useState<string>("");
  const [cover, setCover] = useState<string>("");
  const token = useAppSelector(selectToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    ChangeImg();
  }, []);
  function ChangeImg() {
    utilApi.randImg().then((e) => {
      setCover(e.data?.result?.urls?.raw);
    });
  }

  function onCreateClick() {
    postNewClass().then(() => {
      setShowModal(false);
    });
  }

  async function postNewClass() {
    Swal.fire({
      title: "Loading data",
      icon: "info",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      const classIns: ClassModel = {
        className: className,
        description: classDes,
        cover: cover,
      };

      await classListApi.postNewClass(classIns, token);
    } catch (error) {
      console.log(error.message);
    }
    dispatch(fetchMyClassListAsync(token));
    Swal.close();
  }

  return (
    <React.Fragment>
      {isOpen && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Create New Class</h3>
                  <button
                    className="p-1 ml-auto border-0 loat-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div>
                    <div className="md:grid md:grid-cols-4 md:gap-6">
                      <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div className=" grid grid-cols-3 gap-6">
                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="company-website"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Class Name
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <input
                                    type="text"
                                    name="company-website"
                                    id="company-website"
                                    onChange={(e) =>
                                      setClassName(e.target.value)
                                    }
                                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                                    placeholder="PTUD WEB NC"
                                  />
                                </div>
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="about"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Description
                              </label>
                              <div className="mt-1">
                                <textarea
                                  onChange={(e) => setClassDes(e.target.value)}
                                  id="about"
                                  name="about"
                                  rows={3}
                                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                  placeholder="Description"
                                  defaultValue={""}
                                />
                              </div>
                              <p className="mt-2 text-sm text-gray-500">
                                Brief description for your class.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div>
                              <label className="block text-sm font-medium text-gray-700">
                                Cover photo
                              </label>
                              <div className="mt-1 justify-center align-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <img
                                  src={cover}
                                  className="h-44 w-72 object-cover"
                                />
                                <button
                                  className="mt-2 py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                  onClick={ChangeImg}
                                >
                                  Chance
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    onClick={onCreateClick}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </React.Fragment>
  );
};

export default ClassCreateModalComp;
