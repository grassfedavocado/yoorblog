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
      className="duration-400 border-2 m-5 w-2/3 border-black px-1 py-2 text-sm outline-none transition focus:border-r-4 focus:border-b-4 focus:border-r-blue-600 focus:border-b-blue-600 md:text-3xl"
      placeholder={props?.placeholder ?? ""}
      value={props?.value}
      onChange={props?.onChange}
    />
  );
}
