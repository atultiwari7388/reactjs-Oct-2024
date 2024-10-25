import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="bg-emerald-700 flex py-5 px-10 items-center justify-between text-white">
      <Link to="/" className="text-2xl">
        Darling
      </Link>
      <div className="flex gap-10 items-center">
        <Link to="/about" className="text-2xl">
          About
        </Link>
        <Link to="/contact" className="text-2xl">
          Contact
        </Link>
      </div>
    </nav>
  );
};
