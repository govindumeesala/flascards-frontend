import { useGetAllFlashcards } from "@/api/FlashcardApi";
import Flashcard from "./Flashcard";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import { FlashcardType } from "@/types";
import { useEffect, useState } from "react";

const FlashcardsCarousel = () => {
  const { flashcards, isLoading, isError } = useGetAllFlashcards();

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (isError) {
    return <span>Error fetching flashcards</span>;
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center mt-8">
      <Carousel className="w-full max-w-[250px] md:max-w-sm" setApi={setApi}>
        <CarouselContent>
          {flashcards.map((flashcard: FlashcardType) => (
            <Flashcard flashcard={flashcard} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Question {current} of {count}
      </div>
    </div>
  );
};

export default FlashcardsCarousel;
