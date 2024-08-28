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
        className={`card flex justify-center items-center transition-transform transform hover:translate-y-2 h-[320px] ${
          flip ? "flip" : ""
        }`}
        onClick={() => setFlip(!flip)}
      >
        <div className="front min-h-[300px] flex items-center justify-center border-2 border-blue-500 rounded-lg">
          {flashcard.question}
        </div>
        <div className="back min-h-[300px] flex items-center justify-center bg-blue-400 text-white font-bold tracking-tight rounded-lg">
          {flashcard.answer}
        </div>
      </div>
    </CarouselItem>
  );
};

export default Flashcard;
