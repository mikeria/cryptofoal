import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CryptocoinsComponent } from "./components/cryptocoins/cryptocoins.component";

const routes: Routes = [{ path: "", component: CryptocoinsComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
