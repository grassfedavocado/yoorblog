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
      className="duration-400 m-5 px-1 py-2 border-2 border-teal-500 text-sm text-black outline-none transition focus:border-b-4 focus:border-r-4 focus:border-teal-600"
      placeholder={props?.placeholder ?? ""}
      value={props?.value}
      onChange={props?.onChange}
    />
  );
}
