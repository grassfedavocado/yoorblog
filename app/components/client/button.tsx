type Props = {
  text: string;
  color?: string;
  onClick?: () => void;
};

export default function Button(props: Props) {
  return (
    <button
      type="button"
      className={`px-6 py-3 m-3 rounded-2xl text-white text-xl border-white bg-teal-700 hover:bg-teal-600 transition duration-500`}
      onClick={props?.onClick}
    >
      {props.text}
    </button>
  );
}
