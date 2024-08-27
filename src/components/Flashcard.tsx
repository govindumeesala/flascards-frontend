import { useState } from "react";
import { CarouselItem } from "./ui/carousel";
import "./Flashcard.css";
import { FlashcardType } from "../types";

type Props = {
  flashcard: FlashcardType;
};

const Flashcard = ({ flashcard }: Props) => {
  const [flip, setFlip] = useState(false);

  return (
    <CarouselItem>
      <div
        className={`card h-[300px] ${flip ? "flip" : ""}`}
        onClick={() => setFlip(!flip)}
      >
        <div className="front h-[300px] flex items-center justify-center border-2 border-blue-500 rounded-lg">
          {flashcard.question}
        </div>
        <div className="back h-[300px] flex items-center justify-center bg-blue-400 text-white font-bold tracking-tight rounded-lg">
          {flashcard.answer}
        </div>
      </div>
    </CarouselItem>
  );
};

export default Flashcard;
