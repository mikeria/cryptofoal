import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../services/news.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {
  newsList: any[];
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNews().subscribe(news => {
      this.newsList = Object.values(news["Data"]);
      console.log(
        Object.values(news["Data"]) + "..object values on news convert!"
      );
    });
  }
}
