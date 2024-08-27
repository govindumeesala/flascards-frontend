import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

const LoadingButton = () => {
  return (
    <Button className="bg-green-700" disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please Wait...
    </Button>
  );
};

export default LoadingButton;
