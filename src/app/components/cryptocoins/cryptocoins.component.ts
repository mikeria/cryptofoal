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
  //coinsWithImages: Coin[];
  //listCoinImages: Coin[];
  //imageInit: boolean = false;
  portfolio: Coin[] = [];
  coinsInit: boolean = false;
  constructor(private cryptoService: CryptocoinService) {}
  //baseImageUrl: string = "https://www.cryptocompare.com";
  ngOnInit() {
    this.cryptoService.getCoins().subscribe(coins => {
      console.log(coins + "..coins ello!");
      console.log(
        Object.values(coins["data"]) + "..object values on coins convert!"
      );
      this.coins = Object.values(coins["data"]); //Object.values(coins).shift();
      this.coins.sort(this.numericSort);
      this.listCoins = this.coins.slice(0, 10);
      this.coinsInit = true;
    });
  }
  numericSort(obj1, obj2) {
    return parseInt(obj1.rank) - parseInt(obj2.rank);
  }
}
