import {Dialog, DialogBackdrop, DialogPanel} from "@headlessui/react";
import AppButton from "../AppButton.tsx";
import SvgIconSideBarMobile from "../svgs/SvgIconSideBarMobile.tsx";
import SvgIconSearch from "../svgs/SvgIconSearch.tsx";
import SvgIconNewChat from "../svgs/SvgIconNewChat.tsx";

interface IAppSideBarProps {
  isSideBarOpen: boolean;
  setIsSideBarOpen: (value: boolean) => void;
}

export default function MAppSidebar(props: IAppSideBarProps) {
  return (
    <Dialog open={props.isSideBarOpen} onClose={props.setIsSideBarOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-100/55 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-[70%] ">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:-translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white p-2 shadow-xl">
                <div className="flex items-center justify-between">
                  <AppButton onClick={() => props.setIsSideBarOpen(!props.isSideBarOpen)}>
                    <SvgIconSideBarMobile/>
                  </AppButton>
                  <div className="flex">
                    <AppButton>
                      <SvgIconSearch/>
                    </AppButton>
                    <AppButton>
                      <SvgIconNewChat/>
                    </AppButton>
                  </div>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">{/* Your content */}</div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
