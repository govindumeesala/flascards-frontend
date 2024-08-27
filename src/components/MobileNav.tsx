import { SquareMenu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <SquareMenu className="text-white" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col mt-4 gap-4">
          <Link to="/" className="font-bold hover:text-blue-400">
            Home
          </Link>
          <Link to="/dashboard" className="font-bold hover:text-blue-400">
            Dashboard
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
