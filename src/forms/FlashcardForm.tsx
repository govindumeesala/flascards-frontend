import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const flashcardSchema = z.object({
  question: z.string().min(1, "Question is required"),
  answer: z.string().min(1, "Answer is required"),
});

export type FlashcardFormData = z.infer<typeof flashcardSchema>;

type Props = {
  currentFlashcard?: FlashcardFormData;
  onSave: (flashcardData: FlashcardFormData) => void;
  isLoading: boolean;
  title?: string;
  buttonText?: string;
};

const FlashcardForm = ({
  onSave,
  isLoading,
  currentFlashcard,
  title = "Create Flashcard",
  buttonText = "Create",
}: Props) => {
  const form = useForm<FlashcardFormData>({
    resolver: zodResolver(flashcardSchema),
    defaultValues: currentFlashcard || { question: "", answer: "" },
  });

  useEffect(() => {
    form.reset(currentFlashcard);
  }, [currentFlashcard, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-4 bg-gray-100 rounded-lg px-3 py-4 md:p-10 mx-4"
      >
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>

        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl>
                <Textarea {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Answer</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button type="submit" className="bg-green-500">
            {buttonText}
          </Button>
        )}
      </form>
    </Form>
  );
};

export default FlashcardForm;
