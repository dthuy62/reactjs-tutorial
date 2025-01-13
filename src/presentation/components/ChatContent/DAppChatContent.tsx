import AppButton from "../AppButton.tsx";
import SvgIconSideBar from "../svgs/SvgIconSideBar.tsx";
import SvgIconNewChat from "../svgs/SvgIconNewChat.tsx";

interface IDAppSidebarProps {
  isSideBarOpen: boolean;
  setIsSideBarOpen: (value: boolean) => void;
}

export default function DAppSidebar(props: IDAppSidebarProps) {
  return (
    <div
      className={`min-h-full transition-all duration-500 ease-out p-2
          ${props.isSideBarOpen ? 'ml-64' : 'ml-0'} flex-1`}
    >
      {props.isSideBarOpen && <AppButton text="ChatGPT 4 mini"/>}
      {!props.isSideBarOpen && (
        <div className="flex items-center gap-2">
          <AppButton onClick={() => props.setIsSideBarOpen(!props.isSideBarOpen)}>
            <SvgIconSideBar/>
          </AppButton>
          <AppButton>
            <SvgIconNewChat/>
          </AppButton>
          <AppButton text="ChatGPT 4 mini"/>
        </div>
      )}
    </div>
  )
}
