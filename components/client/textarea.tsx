import { ChangeEvent } from "react";

type Props = {
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function Textarea(props: Props) {
  return (
    <textarea
      className="duration-400 m-5 h-3/4 w-4/5 border-2 border-black px-1 py-2 text-sm text-black outline-none transition focus:border-b-4 focus:border-r-4 focus:border-r-blue-600 focus:border-b-blue-600 md:text-xl"
      placeholder={props?.placeholder ?? ""}
      value={props?.value}
      onChange={props?.onChange}
    />
  );
}
