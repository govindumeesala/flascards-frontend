import { useCreateFlashcard } from "@/api/FlashcardApi";
import FlashcardForm from "@/forms/FlashcardForm";

const CreateFlashcard = () => {
  const { createFlashcard, isPending } = useCreateFlashcard();

  return <FlashcardForm onSave={createFlashcard} isLoading={isPending} />;
};

export default CreateFlashcard;
