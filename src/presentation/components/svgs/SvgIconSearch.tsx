
interface  IProps {
  className?: string;
}

const SvgIconSearch = (props: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    className={`icon-xl-heavy ${props.className}`}
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.75 4.25a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m-8.5 6.5a8.5 8.5 0 1 1 15.176 5.262l4.031 4.03a1 1 0 0 1-1.414 1.415l-4.031-4.031A8.5 8.5 0 0 1 2.25 10.75"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default SvgIconSearch;
