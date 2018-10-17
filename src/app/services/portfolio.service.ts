import { Injectable } from "@angular/core";
import { Portfolio } from "../models/portfolio";
import { Coin } from "../models/coin";
@Injectable()
export class PortfolioService {
  portfolios: any[];
  constructor() {}
  getPortfolio() {
    if (localStorage.getItem("portfolios") === null) {
      this.portfolios = [];
    } else {
      this.portfolios = JSON.parse(localStorage.getItem("portfolios"));

      // reset dev code
      /* let goals = [];
      this.goals = goals;
      localStorage.setItem('goals', JSON.stringify(goals)); */
    }

    return this.portfolios;
  }
  updatePortfolio(portfolio: Coin[]) {
    this.portfolios[0] = portfolio;
    localStorage.setItem("portfolios", JSON.stringify(this.portfolios));
  }
}
