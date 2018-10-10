import { Coin } from "./coin";

export interface PortfolioCoin extends Coin {
  quantity: number;
  initialPrice: number;
}
