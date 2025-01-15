export interface CardItem {
  img: string;
  title: string;
  address: string;
  openTime: string;
  sunestTime: string;
  phone_number: string;
  rate: string;
  repair_service: string;
  price: string;
}

export interface UseCardLoaderReturn {
  cards: CardItem[];
  lastCardElementRef: (node: HTMLDivElement | null) => void;
  isLoading: boolean;
}
