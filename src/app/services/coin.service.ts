import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Coin } from "../models/coin";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class CryptocoinService {
  cmcAllUrl: string = "https://api.coinmarketcap.com/v2/ticker/?limit=10";
  cryptoCompareAll: string =
    "https://min-api.cryptocompare.com/data/all/coinlist";

  constructor(private http: HttpClient) {}
  getCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>(this.cmcAllUrl);
  }
  getCoinImages(): Observable<Coin[]> {
    return this.http.get<Coin[]>(this.cryptoCompareAll);
  }
}
