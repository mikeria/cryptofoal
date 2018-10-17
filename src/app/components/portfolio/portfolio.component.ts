import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { Portfolio } from "../../models/portfolio";
import { PortfolioService } from "../../services/portfolio.service";
import { Coin } from "../../models/coin";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.css"]
})
export class PortfolioComponent implements OnInit {
  @Output()
  portfolioDeleted: EventEmitter<Coin> = new EventEmitter();
  @Input()
  portfolioList: Portfolio[];
  @Input()
  portfolio: Coin[];
  constructor(private portfolioService: PortfolioService) {}
  portfolioReady: boolean = false;

  ngOnInit() {
    this.initPortfolio();
  }
  initPortfolio() {
    this.portfolioList = this.portfolioService.getPortfolio();
    //ready to get live prices for portfolio - need to set a flag
    this.portfolioReady = true;
  }
  onPortfolioChange(coin: Coin) {
    const coinId = coin.id;
    const coinIndex = this.portfolio.findIndex(rCoin => rCoin.id === coin.id);
    if (coinIndex === -1) {
      this.portfolio.unshift(coin);
    } else {
      this.portfolio.splice(coinIndex, 1);
    }
    this.portfolioDeleted.emit(coin);
    this.portfolioService.updatePortfolio(this.portfolio);
    console.log(coinIndex + ":coinIndex from portfolio");
    console.log(coinId + ":coinId from portfolio");
  }
  numericSort(obj1, obj2) {
    return parseInt(obj1.rank) - parseInt(obj2.rank);
  }
}
