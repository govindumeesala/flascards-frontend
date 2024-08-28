import { useGetAllFlashcards } from "@/api/FlashcardApi";
import { FlashcardType } from "@/types";
import FlashcardListComp from "./FlashcardListComp";
import { Separator } from "./ui/separator";

const FlashcardsList = () => {
  const { isLoading, isError, flashcards } = useGetAllFlashcards();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error showing flashcards...</span>;
  }

  if (flashcards.length === 0) {
    return <span>No flashcards to show</span>;
  }

  return (
    <>
      <div className="mx-4 mt-4">
        <Separator />
      </div>
      <div className="font-bold text-2xl tracking-tight mx-4 mt-4">
        Available Flashcards
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
        {flashcards.map((flashcard: FlashcardType) => (
          <FlashcardListComp key={flashcard.id} flashcard={flashcard} />
        ))}
      </div>
    </>
  );
};

export default FlashcardsList;
