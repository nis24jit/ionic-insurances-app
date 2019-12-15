// Single entity that represents an insurance object
export interface Insurance {
  id: number;
  name: string;
  price: number;
  term: string;
  icon: string;
  isBought: boolean;
  isInCart: boolean;

}

