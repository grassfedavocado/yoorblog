import { ChangeEvent, HTMLInputTypeAttribute } from "react";

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
      className="mx-2 my-2 px-4 py-2 border border-teal-500 text-black"
      placeholder={props?.placeholder ?? ""}
      value={props?.value}
      onChange={props?.onChange}
    />
  );
}
