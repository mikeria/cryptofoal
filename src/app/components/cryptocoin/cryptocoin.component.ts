import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { Coin } from "../../models/coin";

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
  constructor() {}
  ngOnInit() {}
  portfolioChange(bool: boolean) {
    console.log("portfolio change from coin");
    this.portfolioEmitter.emit(this.coin);
  }
  valueChanged(value: number) {
    console.log(value + ": value...");
    this.coinPortfolioValue = value * this.coin.quotes["USD"]["price"];
  }
}
