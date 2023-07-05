type Props = {
  text: string;
  color?: string;
  onClick?: () => void;
};

export default function Button(props: Props) {
  return (
    <button
      type="button"
      className={`m-3 rounded-2xl border-black bg-black px-6 py-3 text-xl text-white transition duration-500 hover:bg-gray-600`}
      onClick={props?.onClick}
    >
      {props.text}
    </button>
  );
}
