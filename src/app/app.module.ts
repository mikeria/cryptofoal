import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { CryptocoinService } from "./services/coin.service";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { CryptocoinsComponent } from "./components/cryptocoins/cryptocoins.component";
import { CryptocoinComponent } from "./components/cryptocoin/cryptocoin.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AppRoutingModule } from ".//app-routing.module";
import { CryptoListHeaderComponent } from "./components/crypto-list-header/crypto-list-header.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { PortfolioService } from "./services/portfolio.service";
import { HomeComponent } from "./components/home/home.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CryptocoinsComponent,
    CryptocoinComponent,
    NavbarComponent,
    CryptoListHeaderComponent,
    PortfolioComponent,
    HomeComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [CryptocoinService, PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule {}
