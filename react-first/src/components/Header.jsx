export const Header = () => {
  return (
    <nav className="bg-emerald-700 flex py-5 px-10 items-center justify-between text-white">
      <h1 className="text-2xl">Darling</h1>
      <div className="flex gap-10 items-center">
        <h4 className="text-xl">About</h4>
        <h4 className="text-xl">Contact</h4>
        <h4 className="text-xl">Services</h4>
        <h4 className="text-xl">Your Account</h4>
      </div>
    </nav>
  );
};
