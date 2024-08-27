import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <>
      {/* Right side: Navigation links */}
      <div className="space-x-4">
        <Link to="/" className="font-bold text-white hover:text-gray-200">
          Home
        </Link>
        <Link
          to="/dashboard"
          className="font-bold text-white hover:text-gray-200"
        >
          Dashboard
        </Link>
      </div>
    </>
  );
};

export default MainNav;
