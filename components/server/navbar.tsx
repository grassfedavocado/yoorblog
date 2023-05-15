import Button from "../client/button";

export default function Navbar() {
  return (
    <div className="mb-5 px-5 h-1/4 flex justify-between border-b-8 border-b-white">
      <div className="my-8">
        <h1 className="py-1 text-4xl text-teal-500 font-bold">Yoorblog</h1>
      </div>
      <div className="flex my-4">
        <Button text="Signup" />
        <Button text="Login" />
      </div>
    </div>
  );
}
