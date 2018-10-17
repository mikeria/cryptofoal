import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { Coin } from "../../models/coin";
import { PortfolioCoin } from "../../models/portfolio-coin";

@Component({
  selector: "app-cryptocoin",
  templateUrl: "./cryptocoin.component.html",
  styleUrls: ["./cryptocoin.component.css"]
})
export class CryptocoinComponent implements OnInit {
  @Output()
  portfolioEmitter: EventEmitter<Coin> = new EventEmitter();
  @Input()
  coin: Coin;
  @Input()
  inPortfolio: boolean = false;
  @Input()
  isPortfolio: boolean = false;
  coinPortfolioValue: number = 0;
  coinPortfolioChange: number = 0;
  initialPortfolioValue: number = 0;
  constructor() {}
  ngOnInit() {}
  portfolioChange(bool: boolean) {
    console.log("portfolio change from coin");
    this.portfolioEmitter.emit(this.coin);
  }
  valueChanged(value: number) {
    console.log(value + ": value...");
    this.coinPortfolioValue = value * this.coin.quotes["USD"]["price"];
    this.portfolioPercentChange();
  }
  portfolioPercentChange() {
    this.initialPortfolioValue = this.coin.quantity * this.coin.initialPrice;
    this.coinPortfolioChange =
      ((this.coinPortfolioValue - this.initialPortfolioValue) /
        this.initialPortfolioValue) *
      100;
    // if (this.coinPortfolioValue < this.initialPortfolioValue) {
    //   this.coinPortfolioChange = (100 - this.coinPortfolioChange) * -1;
    // }
  }
}
