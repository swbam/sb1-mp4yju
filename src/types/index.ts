export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  image: string;
  distance?: number;
  timeLeft?: string;
  bids?: number;
  watchers?: number;
  title?: string;
}

export interface Bid {
  id: string;
  car: Car;
  amount: number;
  status: 'active' | 'outbid' | 'won' | 'lost';
  date: Date;
}

export interface WatchlistItem {
  id: string;
  car: Car;
  addedDate: Date;
  endDate: Date;
}

export interface Result {
  id: string;
  car: Car;
  finalPrice: number;
  soldDate: Date;
  totalBids: number;
}