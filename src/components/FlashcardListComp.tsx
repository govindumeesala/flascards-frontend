import { FlashcardType } from "@/types";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import FlashcardForm from "@/forms/FlashcardForm";
import { useDeleteFlashcard, useUpdateFlashcard } from "@/api/FlashcardApi";
import { FlashcardFormData } from "@/forms/FlashcardForm";
import LoadingButton from "./LoadingButton";

type Props = {
  flashcard: FlashcardType;
};

const FlashcardListComp = ({ flashcard }: Props) => {
  const { updateFlashcard, isPending } = useUpdateFlashcard();
  const { deleteFlashcard, isPending: isDeleteLoading } = useDeleteFlashcard();

  const handleUpdate = (id: number, flashcardData: FlashcardFormData) => {
    updateFlashcard({ id, ...flashcardData });
  };

  const handleDelete = (id: number) => {
    deleteFlashcard(id);
  };

  return (
    <div className="flex flex-col items-start justify-center space-y-4 p-4 border-2 border-blue-500 rounded-lg">
      <div className="text-md text-gray-600">{flashcard.question}</div>
      <div className="font-bold text-md tracking-tight">{flashcard.answer}</div>
      <div className="flex gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="font-bold text-md text-white bg-blue-500">
              Update
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[380px] md:w-[700px]">
            <FlashcardForm
              onSave={(formData) => handleUpdate(flashcard.id, formData)}
              isLoading={isPending}
              title="Update Flashcard"
              buttonText="Update"
              currentFlashcard={flashcard}
            />
          </PopoverContent>
        </Popover>
        {isDeleteLoading ? (
          <LoadingButton />
        ) : (
          <Button
            className="bg-red-500 text-white font-bold text-md"
            onClick={() => handleDelete(flashcard.id)}
          >
            Delete
          </Button>
        )}
      </div>
    </div>
  );
};

export default FlashcardListComp;
