import {AppIcon} from "../AppIcon.tsx";
import {assets} from "../../../assets/assets.ts";
import {SidebarItem} from "./SidebarItem.tsx";

const Sidebar = () => {
  return (
    <div className="sidebar inline-flex flex-col justify-between min-h-screen bg-[#f0f4f9] py6 px-3.5">
      <div className="top">
        <AppIcon className="block ml-2.5 mt-5" src={assets.menu_icon}/>
        <div className="new chat inline-flex items-center py-2.5 px-4 gap-2.5 bg-[#e6eaf1] rounded-full mt-12">
          <AppIcon src={assets.plus_icon}/>

        </div>
        <div className="recent flex flex-col">
          <div className="recent-title mt-8 mb-7">Recent</div>
          <SidebarItem prefixIcon={assets.message_icon} text="What is react" />
        </div>
      </div>
      <div className="bottom flex flex-col">
        <SidebarItem prefixIcon={assets.question_icon} text="Help" />
        <SidebarItem prefixIcon={assets.history_icon} text="Activity" />
        <SidebarItem prefixIcon={assets.setting_icon} text="Settings" />
      </div>
    </div>
  )
}

export default Sidebar
