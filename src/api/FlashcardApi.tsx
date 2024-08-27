import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetAllFlashcards = () => {
  const getAllFlashcardsRequest = async () => {
    const respose = await fetch(`${API_BASE_URL}/api/flashcards`);

    if (!respose.ok) {
      throw new Error("Error fetching flashcards");
    }

    return respose.json();
  };

  const queryClient = useQueryClient();

  const {
    data: flashcards,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["flashcards"], // Unique key to identify this query
    queryFn: getAllFlashcardsRequest, // Function that fetches the data
  });

  // Method to invalidate the cache and refetch the data
  const invalidateFlashcardsCache = () => {
    queryClient.invalidateQueries({ queryKey: ["flashcards"] }); // Invalidate and refetch
  };

  return { flashcards, error, isError, isLoading, invalidateFlashcardsCache };
};

export const useCreateFlashcard = () => {
  const queryClient = useQueryClient();
  const [errorShown, setErrorShown] = useState(false); // State to track if the error has been shown

  const createFlashcardRequest = async (newFlashcard: {
    question: string;
    answer: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/api/flashcards/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFlashcard),
    });

    if (!response.ok) {
      throw new Error("Error creating flashcard");
    }

    return response.json();
  };

  // The useMutation hook
  const {
    mutateAsync: createFlashcard,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: createFlashcardRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["flashcards"] });
      setErrorShown(false); // Reset error state on success
    },
    onError: () => {
      if (!errorShown) {
        toast.error("Error creating flashcard");
        setErrorShown(true); // Set error state to true after showing the toast
      }
    },
  });

  // Reset the error state when the component is unmounted or error changes
  useEffect(() => {
    if (isSuccess) {
      toast.success("Flashcard created successfully!");
    }
  }, [isSuccess]);

  return { createFlashcard, isPending };
};
