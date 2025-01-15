import { CardItem, UseCardLoaderReturn } from '@/types/hooks/useCardLoaderTypes';
import { useCallback, useEffect, useRef, useState } from 'react';

export function useCardLoader(initialData: CardItem[]): UseCardLoaderReturn {
  const [cards, setCards] = useState<CardItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const observer = useRef<IntersectionObserver | null>(null);

  // Function to load initial set of cards
  const loadInitialCards = useCallback(() => {
    const initialCards = initialData?.slice(0, 5);
    setCards(initialCards);
    setIsLoading(false);
  }, [initialData]);

  // Effect to load initial cards on component mount
  useEffect(() => {
    loadInitialCards();
  }, [loadInitialCards]);

  // Function to load more cards when the last card is intersecting
  const loadMoreCards = useCallback(() => {
    const currentCardLength = cards?.length;
    const nextCards = initialData?.slice(currentCardLength, currentCardLength + 5);

    if (nextCards?.length > 0) {
      setIsLoading(true);
      // Simulate a delay in loading cards (optional, can be removed)
      setTimeout(() => {
        setCards(prevCards => [...prevCards, ...nextCards]);
        setIsLoading(false);
      }, 3000);
    } else {
      setIsLoading(false);
    }
  }, [cards, initialData]);

  // Callback ref for the last card element to observe intersection
  const lastCardElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            loadMoreCards();
          }
        },
        { threshold: 0.9 }
      );

      if (node) observer.current.observe(node);
    },
    [loadMoreCards]
  );

  return { cards, lastCardElementRef, isLoading };
}
