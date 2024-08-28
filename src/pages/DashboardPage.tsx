import CreateFlashcard from "@/components/CreateFlashcard";
import FlashcardsList from "@/components/FlashcardsList";

const DashboardPage = () => {
  return (
    <div className="flex flex-col y-space-4 my-4">
      <CreateFlashcard />
      <FlashcardsList />
    </div>
  );
};

export default DashboardPage;
