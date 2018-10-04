import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { CryptocoinService } from "./services/coin.service";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { CryptocoinsComponent } from "./components/cryptocoins/cryptocoins.component";
import { CryptocoinComponent } from "./components/cryptocoin/cryptocoin.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AppRoutingModule } from ".//app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    CryptocoinsComponent,
    CryptocoinComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [CryptocoinService],
  bootstrap: [AppComponent]
})
export class AppModule {}
