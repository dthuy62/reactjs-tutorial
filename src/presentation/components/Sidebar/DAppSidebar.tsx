import AppButton from "../AppButton.tsx";
import SvgIconSideBar from "../svgs/SvgIconSideBar.tsx";
import SvgIconSearch from "../svgs/SvgIconSearch.tsx";
import SvgIconNewChat from "../svgs/SvgIconNewChat.tsx";

interface IDAppSidebarProps {
  isSideBarOpen: boolean
  setIsSideBarOpen: (value: boolean) => void
}

export default function DAppSidebar(props: IDAppSidebarProps) {
  return (
    <div
      className={`fixed h-full bg-gray-100 transform transition-transform duration-500 ease-out
          ${props.isSideBarOpen ? 'translate-x-0' : '-translate-x-full'}
          w-64 p-2`}
    >
      <div className=" flex items-center justify-between">
        <AppButton onClick={() => props.setIsSideBarOpen(!props.isSideBarOpen)}>
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
  )
}
