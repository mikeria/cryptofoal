import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { Coin } from "../../models/coin";

@Component({
  selector: "app-cryptocoin",
  templateUrl: "./cryptocoin.component.html",
  styleUrls: ["./cryptocoin.component.css"]
})
export class CryptocoinComponent implements OnInit {
  @Input()
  coin: Coin;
  constructor() {}
  ngOnInit() {}
  get cryptoCoin() {
    return this.coin;
  }
  set cryptoCoin(value) {
    this.coin = value;
  }
}
