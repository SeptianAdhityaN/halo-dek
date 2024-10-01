import NavLink from "../Fragments/NavLink.jsx";
import { useState } from "react";
import Logo from "../Elements/Logo/index.jsx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed flex justify-between items-center px-8 lg:pl-12 lg:pr-24 py-4 w-full bg-slate-800 shadow-lg">
      <Logo size="max-w-10" />
      <NavLink classname="hidden lg:flex gap-8" />

      <i
        className="bx bx-menu text-3xl text-white lg:hidden block"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></i>
      <div
        className={`bg-slate-500 absolute lg:hidden top-20 w-[300px] flex flex-col pl-12 py-4 rounded-bl-lg transform transition-transform ${
          isMenuOpen ? "opacity-100 right-0" : "opacity-0 right-[-500px]"
        }`}
        style={{
          transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
        }}
      >
        <NavLink />
      </div>
    </header>
  );
};

export default Navbar;
