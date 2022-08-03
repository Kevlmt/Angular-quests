import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MyFormComponent } from './my-form/my-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserProfileComponent,
    SignUpComponent,
    MyFormComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
