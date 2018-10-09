import { Component, OnInit } from "@angular/core";
import { Coin } from "../../models/coin";
import { CryptocoinService } from "../../services/coin.service";
import { CryptocoinComponent } from "../cryptocoin/cryptocoin.component";
import { CryptoListHeaderComponent } from "../crypto-list-header/crypto-list-header.component";

@Component({
  selector: "app-cryptocoins",
  templateUrl: "./cryptocoins.component.html",
  styleUrls: ["./cryptocoins.component.css"]
})
export class CryptocoinsComponent implements OnInit {
  coins: Coin[];
  listCoins: Coin[];
  portfolio: Coin[] = [];
  coinsInit: boolean = false;
  constructor(private cryptoService: CryptocoinService) {}
  ngOnInit() {
    this.cryptoService.getCoins().subscribe(coins => {
      console.log(coins + "..coins ello!");
      console.log(
        Object.values(coins["data"]) + "..object values on coins convert!"
      );
      this.coins = Object.values(coins["data"]);
      this.coins.sort(this.numericSort);
      this.listCoins = this.coins.slice(0, 10);
      this.coinsInit = true;
    });
  }
  numericSort(obj1, obj2) {
    return parseInt(obj1.rank) - parseInt(obj2.rank);
  }
  onPortfolioChange(coin: Coin) {
    const coinId = coin.id;
    const coinIndex = this.portfolio.findIndex(rCoin => rCoin.id === coin.id);
    if (coinIndex === -1) {
      this.portfolio.unshift(coin);
    } else {
      this.portfolio.splice(coinIndex, 1);
    }

    console.log(coinIndex + ":coinIndex");
    console.log(coinId + ":coinId");
  }
  checkPortfolio(value, index, array) {
    console.log("index" + index);
    console.log("value" + value.id);
    console.log("run" + index);
    return value.id;
  }
}
