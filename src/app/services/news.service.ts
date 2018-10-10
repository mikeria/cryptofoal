import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class NewsService {
  newsUrl: string =
    "https://min-api.cryptocompare.com/data/v2/news/?feeds=cryptocompare,cointelegraph,coindesk&extraParams=riadevelopment.co.uk/cryptofoal";

  constructor(private http: HttpClient) {}
  getNews(): Observable<any[]> {
    return this.http.get<any[]>(this.newsUrl);
  }
}
