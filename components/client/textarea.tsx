import { ChangeEvent } from "react";

type Props = {
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function Textarea(props: Props) {
  return (
    <textarea
      className="duration-400 m-5 h-3/4 w-4/5 border-4 border-teal-500 px-1 py-2 text-sm text-black outline-none transition focus:border-b-8 focus:border-r-8 focus:border-teal-600 md:text-xl"
      placeholder={props?.placeholder ?? ""}
      value={props?.value}
      onChange={props?.onChange}
    />
  );
}
