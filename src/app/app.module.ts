import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TesApiComponent } from './tes-api/tes-api.component';

@NgModule({
  declarations: [AppComponent, TesApiComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
