import { Component, OnInit } from "@angular/core";
import { Coin } from "../../models/coin";

@Component({
  selector: "app-cryptocoin",
  templateUrl: "./cryptocoin.component.html",
  styleUrls: ["./cryptocoin.component.css"]
})
export class CryptocoinComponent implements OnInit {
  constructor() {}
  coin: Coin;
  ngOnInit() {}
}
