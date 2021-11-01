import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

type AppProps = {
  onClickCreateBtn: VoidFunction;
  onClickJoinBtn: VoidFunction;
};

export default function NewMenuPopover({
  onClickCreateBtn,
  onClickJoinBtn,
}: AppProps) {
  const solutions = [
    {
      name: "Create",
      description: "Create new GradeBook",
      onClick: onClickCreateBtn,
      icon: IconOne,
    },
    {
      name: "Join",
      description: "Join a GradeBook with Code",
      onClick: onClickJoinBtn,
      icon: IconTwo,
    },
  ];
  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <Popover.Button className="flex items-center align-middle py-2 bg-white shadow-md  rounded-3xl text-gray-800 text-sm font-semibold ml-3 border border-gray-200 hover:shadow-md transition-all w-36  focus:outline-none">
            <svg className="h-8 px-4" viewBox="0 0 36 36">
              <path
                className="ng-tns-c17-1"
                d="M16 16v14h4V20z"
                fill="#34A853"
              />
              <path
                className="ng-tns-c17-1"
                d="M30 16H20l-4 4h14z"
                fill="#4285F4"
              />
              <path
                className="ng-tns-c17-1"
                d="M6 16v4h10l4-4z"
                fill="#FBBC05"
              />
              <path
                className="ng-tns-c17-1"
                d="M20 16V6h-4v14z"
                fill="#EA4335"
              />
              <path className="ng-tns-c17-1" d="M0 0h36v36H0z" fill="none" />
            </svg>
            New
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 sm:px-0 ml-3">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
                <div className="relative grid gap-8 p-7">
                  {solutions.map((item) => (
                    <button
                      key={item.name}
                      onClick={item.onClick}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                        <item.icon aria-hidden="true" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}
