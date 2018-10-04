import { Component, OnInit } from "@angular/core";
import { Coin } from "../../models/coin";
import { CryptocoinService } from "../../services/coin.service";

@Component({
  selector: "app-cryptocoins",
  templateUrl: "./cryptocoins.component.html",
  styleUrls: ["./cryptocoins.component.css"]
})
export class CryptocoinsComponent implements OnInit {
  coins: Coin[];
  listCoins: Coin[];
  coinsWithImages: Coin[];
  listCoinImages: Coin[];
  imageInit: boolean = false;
  coinsInit: boolean = false;
  constructor(private cryptoService: CryptocoinService) {}
  baseImageUrl: string = "https://www.cryptocompare.com";
  ngOnInit() {
    // this.cryptoService.getCoinImages().subscribe(coins => {
    //   console.log(coins + "..coins ello!");
    //   console.log(
    //     Object.values(coins["Data"]) + "..object values on coins convert!"
    //   );
    //   this.coinsWithImages = Object.values(coins["Data"]); //Object.values(coins).shift();
    //   this.coinsWithImages.sort(this.numericSort);
    //   this.listCoinImages = this.coinsWithImages.slice(0, 500);
    //   this.imageInit = true;
    //   if (this.coinsInit) {
    //     this.setImages();
    //   }
    // });
    //cmc
    this.cryptoService.getCoins().subscribe(coins => {
      console.log(coins + "..coins ello!");
      console.log(
        Object.values(coins["data"]) + "..object values on coins convert!"
      );
      this.coins = Object.values(coins["data"]); //Object.values(coins).shift();
      this.coins.sort(this.numericSort);
      this.listCoins = this.coins.slice(0, 10);
      this.coinsInit = true;
      if (this.imageInit) {
        //this.setImages();
      }
    });
  }
  numericSort(obj1, obj2) {
    return parseInt(obj1.rank) - parseInt(obj2.rank);
  }
  setImages() {}
  getImage(coinSymbol: string) {
    let i: number = 0;
    let len: number = this.listCoinImages.length;
    for (i; i < len; i++) {
      if (coinSymbol.toUpperCase === this.listCoinImages[i]["Symbol"]) {
        return this.baseImageUrl + this.listCoinImages[i]["ImageUrl"];
      }
    }
  }
}
