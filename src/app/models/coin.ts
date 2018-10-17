import { CoinQuotes } from "./coin-quotes";

export interface Coin {
  id: number;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  quotes: Object;
  initialPrice?: number;
  quantity?: number;
}
