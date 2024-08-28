import { useCreateFlashcard } from "@/api/FlashcardApi";
import FlashcardForm, { FlashcardFormData } from "@/forms/FlashcardForm";

const CreateFlashcard = () => {
  const { createFlashcard, isPending } = useCreateFlashcard();

  const handlecreateFlashcard = async (formData: FlashcardFormData) => {
    await createFlashcard(formData);
  };

  return (
    <FlashcardForm
      onSave={(data) => handlecreateFlashcard(data)}
      isLoading={isPending}
    />
  );
};

export default CreateFlashcard;
