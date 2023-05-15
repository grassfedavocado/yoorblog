import { ChangeEvent } from "react";

type Props = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: Props) {
  return (
    <input
      type={props?.type ?? "text"}
      className="m-2 px-2 py-1 text-black text-lg outline-none border-2 border-teal-500 focus:border-b-4 focus:border-r-4 focus:border-teal-600 transition duration-400"
      placeholder={props?.placeholder ?? ""}
      value={props?.value}
      onChange={props?.onChange}
    />
  );
}
