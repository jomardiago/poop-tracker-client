import poopLogo from "@/assets/poop-black.svg";

export const Header = () => {
  return (
    <nav className="h-14 border-b shadow-sm flex items-center px-4">
      <img src={poopLogo} alt="Poop logo" className="w-12 h-12" />
    </nav>
  );
};
