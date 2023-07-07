import Link from "next/link";
import Image from "next/image";
import Github from "@/public/github.svg";

export default function Footer() {
  return (
    <div className="w-min-screen border-t-2 border-black bg-white">
      <p className="m-3 text-center text-md md:m-5 md:text-2xl">
        Yoorblog ©️ 2023{" "}
        <span className="font-normal">
          Made with 💙, Open Source{" "}
          <Link
            href="https://github.com/noahpickle/yoorblog"
            target="_blank"
          >
            <Image
              src={Github}
              alt="github icon"
              width={36}
              height={36}
              className="inline"
            />
          </Link>
        </span>
      </p>
    </div>
  );
}
