
interface  IAppButtonProps {
  backgroundColor?: string;
  textColor?: string;
  text: string;
}

export default function AppButton(props: IAppButtonProps) {
  console.log(props.backgroundColor);
  return (
    <div>
      <button
        className={`${props.backgroundColor} rounded-xl border hover:bg-primary active:bg-primary focus:outline-none transition duration-200 ease-in-out`}>
        <div className={`px-5 py-4 ${props.textColor}`}>{props.text}</div>
      </button>
    </div>
  )
}
