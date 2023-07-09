type Props = {
  text: string;
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button(props: Props) {
  return (
    <button
      type="button"
      className={`m-3 rounded-2xl border-black ${
        props?.disabled ? "bg-gray-400" : "bg-blue-600"
      } px-6 py-3 text-xl text-white transition duration-500 ${
        props?.disabled ? "" : "hover:bg-blue-500"
      }`}
      onClick={props?.onClick}
      disabled={props?.disabled}
    >
      {props.text}
    </button>
  );
}
