import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PgxModulesModule } from './pgx-modules/pgx-modules.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PgxModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
