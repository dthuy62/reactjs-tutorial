import {AppIcon} from "../AppIcon.tsx";

interface ISidebarItemProps {
  prefixIcon: string;
  text: string;
}

export const SidebarItem = (props: ISidebarItemProps) => {
  return (
    <>
      <div
        className="recent-entry flex items-start gap-2.5 pr-10 p-2.5 rounded-full cursor-pointer text-[#282828] hover:bg-[#e2e6eb]">
        <AppIcon src={props.prefixIcon}/>
        <p>{props.text}</p>
      </div>
    </>
  )
}
