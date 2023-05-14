"use client";

type Props = {
  text: string;
  color?: string;
  onClick?: () => void;
};

export default function Button(props: Props) {
  return (
    <button
      className={`px-6 py-3 m-3 text-white text-lg border border-white bg-${props?.color ?? "teal"}-500`}
      onClick={props?.onClick}
    >
      {props.text}
    </button>
  );
}
