import Button from "../client/button";

export default function Navbar() {
  return (
    <div className="mb-5 flex justify-center border-b-8 border-b-white px-5 md:justify-between">
      <div className="my-8">
        <h1 className="py-1 text-4xl font-bold text-teal-500">Yoorblog</h1>
      </div>
      <div className="my-4 hidden md:block">
        <Button text="Signup" />
        <Button text="Login" />
      </div>
    </div>
  );
}
