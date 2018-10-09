import { Component, OnInit } from "@angular/core";
import { Portfolio } from "../../models/portfolio";
import { PortfolioService } from "../../services/portfolio.service";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.css"]
})
export class PortfolioComponent implements OnInit {
  portfolioList: Portfolio[];
  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioList = this.portfolioService.getPortfolio();
  }
  numericSort(obj1, obj2) {
    return parseInt(obj1.rank) - parseInt(obj2.rank);
  }
}
