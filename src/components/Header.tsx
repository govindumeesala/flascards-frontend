import { Link } from "react-router-dom";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <nav className="bg-blue-600 p-6 shadow-md shadow-gray-900/50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Site name */}
        <div className="text-white text-xl font-bold hover:text-gray-200 tracking-tight">
          <Link to="/">MyFlashCards</Link>
        </div>

        <div className="hidden md:block">
          <MainNav />
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Header;
