import { Injectable } from "@angular/core";
import { Portfolio } from "../models/portfolio";
@Injectable()
export class PortfolioService {
  portfolios: Portfolio[];
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
    // this.portfolios = [
    //   {
    //     name: "myPortfolio1",
    //     list: [
    //       {
    //         id: 1027,
    //         name: "ETH",
    //         quantity: 20,
    //         initialPrice: 10,
    //         symbol: "ETH",
    //         rank: 2,
    //         circulating_supply: 20000000,
    //         total_supply: 20000000,
    //         max_supply: 20000000,
    //         quotes: {}
    //       }
    //     ]
    //   }
    // ];
    return this.portfolios;
  }
  //getPortfolioNames() {}
  addPortfolio(portfolio: Portfolio) {
    this.portfolios.unshift(portfolio);
    let portfolios; //local var
    if (localStorage.getItem("portfolios") === null) {
      portfolios = [];
      portfolios.unshift(portfolio);
      localStorage.setItem("portfolios", JSON.stringify(portfolios));
    } else {
      portfolios = JSON.parse(localStorage.getItem("portfolios"));
      portfolios.unshift(portfolio);
      localStorage.setItem("portfolios", JSON.stringify(portfolios));
    }
  }

  removeGoal(portfolio: Portfolio) {
    let i: number;
    let len: number = this.portfolios.length;
    for (i = 0; i < len; i++) {
      if (portfolio === this.portfolios[i]) {
        this.portfolios.splice(i, 1);
        localStorage.setItem("portfolios", JSON.stringify(this.portfolios));
      }
    }
  }
}
