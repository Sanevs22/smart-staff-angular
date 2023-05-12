import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from "./profile-page/profile-page.component";
import { LogopassComponent } from "./logopass/logopass.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'login', component: LogopassComponent },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
