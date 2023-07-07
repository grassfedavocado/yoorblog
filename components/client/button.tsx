type Props = {
  text: string;
  color?: string;
  onClick?: () => void;
};

export default function Button(props: Props) {
  return (
    <button
      type="button"
      className={`m-3 rounded-2xl border-black bg-blue-600 px-6 py-3 text-xl text-white transition duration-500 hover:bg-blue-500`}
      onClick={props?.onClick}
    >
      {props.text}
    </button>
  );
}
