import React from "react";
import { Tooltip } from 'react-tooltip';

interface  IAppButtonProps {
  textColor?: string;
  text?: string;
  children?: React.ReactNode;
  dataTooltipContent?: string;
  onClick?: () => void;
  style?: string;
  padding?: string;
}

export default function AppButton(props: IAppButtonProps) {

  return (
    <>
      <div>
        <button onClick={props.onClick} data-tooltip-id="tooltip-default"  data-tooltip-content={props.dataTooltipContent}
                data-tooltip-place="top"
                className={props.style != null ? `${props.style} ` : `rounded-lg` + `hover:bg-gray-100 active:bg-gray-100 focus:outline-none transition duration-200 ease-in-out` }>
          <div className="flex items-center justify-center px-2 py-2">
            {props.children != null && props.children}
            {props.text != null && <div className={`${props.textColor}`}>{props.text}</div>}
          </div>
        </button>
      </div>
      <Tooltip id="tooltip-default" style={{borderRadius: "10px",}} />
    </>


  )
}
