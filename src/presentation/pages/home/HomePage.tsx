import SvgIconSideBar from "../../components/svgs/SvgIconSideBar.tsx";
import SvgIconSearch from "../../components/svgs/SvgIconSearch.tsx";
import SvgIconNewChat from "../../components/svgs/SvgIconNewChat.tsx";
import AppButton from "../../components/AppButton.tsx";
import {useState} from "react";
import useCheckMobileScreen from "../../../hooks/useCheckMobileScreen.ts";
import SvgIconSideBarMobile from "../../components/svgs/SvgIconSideBarMobile.tsx";
import {Dialog, DialogBackdrop, DialogPanel} from '@headlessui/react';
import SvgIconAttached from "../../components/svgs/SvgIconAttached.tsx";
import SvgIconBrowser from "../../components/svgs/SvgIconBrowser.tsx";
import SvgIconVoiceMode from "../../components/svgs/SvgIconVoiceMode.tsx";

export default function HomePage() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const isMobile = useCheckMobileScreen();
  //${isSideBarOpen ? 'w-1/6 translate-x-0' : 'w-0 -translate-x-full'}
  if (isMobile) {
    return (
      <>
        <div className="layout-mobile">
          <div className="header flex justify-between p-2">
            <div className="btn-sidebar">
              <AppButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                <SvgIconSideBarMobile/>
              </AppButton>
            </div>
            <div className="model-name">
              <AppButton text="ChatGPT 4 mini"/>
            </div>
            <div className="new-chat">
              <AppButton>
                <SvgIconNewChat/>
              </AppButton>
            </div>
          </div>
          <div className="content mx-3">
            <div className="input-container bg-slate-200 p-3 rounded-2xl">
              <input
                className="placeholder:text-slate-400 block w-full rounded-md bg-transparent"
                placeholder="Search for anything..." type="text" name="search"/>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <AppButton>
                    <SvgIconAttached />
                  </AppButton>
                  <AppButton>
                    <SvgIconBrowser />
                  </AppButton>
                </div>
                <AppButton style="bg-black rounded-full" >

                  <SvgIconVoiceMode />
                </AppButton>


              </div>

             </div>

          </div>
        </div>
        <Dialog open={isSideBarOpen} onClose={setIsSideBarOpen} className="relative z-10">
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
                      <AppButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
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
      </>

    )
  }
  return (
    <div className="layout-desktop flex h-full">
      <div
        className={`fixed h-full bg-gray-100 transform transition-transform duration-500 ease-out
          ${isSideBarOpen ? 'translate-x-0' : '-translate-x-full'}
          w-64 p-2`}
      >
        <div className="flex items-center justify-between">
          <AppButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
            <SvgIconSideBar/>
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
      </div>

      <div
        className={`min-h-full transition-all duration-500 ease-out p-2
          ${isSideBarOpen ? 'ml-64' : 'ml-0'} flex-1`}
      >
        {isSideBarOpen && <AppButton text="ChatGPT 4 mini"/>}
        {!isSideBarOpen && (
          <div className="flex items-center gap-2">
            <AppButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
              <SvgIconSideBar/>
            </AppButton>
            <AppButton>
              <SvgIconNewChat/>
            </AppButton>
            <AppButton text="ChatGPT 4 mini"/>
          </div>
        )}
      </div>
    </div>
  );
}



