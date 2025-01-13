import SvgIconNewChat from "../../components/svgs/SvgIconNewChat.tsx";
import AppButton from "../../components/AppButton.tsx";
import {useState} from "react";
import useCheckMobileScreen from "../../../hooks/useCheckMobileScreen.ts";
import SvgIconSideBarMobile from "../../components/svgs/SvgIconSideBarMobile.tsx";
import './HomePage.scss';
import MAppSidebar from "../../components/Sidebar/MAppSidebar.tsx";
import DAppChatContent from "../../components/ChatContent/DAppChatContent.tsx";
import ChatOnboarding from "../../ChatOnboarding.tsx";
import DAppSidebar from "../../components/Sidebar/DAppSidebar.tsx";
import AppChatBar from "../../components/ChatBar/AppChatBar.tsx";

export default function HomePage() {
  const isMobile = useCheckMobileScreen();
  const [isSideBarOpen, setIsSideBarOpen] = useState(!isMobile);
  if (isMobile) {
    return (
      <>
        <div className="layout-mobile h-full flex flex-col">
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
          <div className="content relative h-full mx-4 ">
            <ChatOnboarding />
           <AppChatBar />

          </div>
        </div>
       <MAppSidebar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
      </>

    )
  }
  return (
    <div className="layout-desktop flex">
      <DAppSidebar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />

      <DAppChatContent isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
    </div>
  );
}



