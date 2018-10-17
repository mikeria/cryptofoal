import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-crypto-list-header",
  templateUrl: "./crypto-list-header.component.html",
  styleUrls: ["./crypto-list-header.component.css"]
})
export class CryptoListHeaderComponent implements OnInit {
  @Input()
  isPortfolio: boolean = false;
  constructor() {}

  ngOnInit() {}
}
