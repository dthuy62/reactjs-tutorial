
interface IAppIconProps {
  src: string;
  className?: string;
}

export const AppIcon = (props: IAppIconProps) => {
  return (
  <img className={`${props.className} w-5`} src={props.src} alt="" />
    )
}
