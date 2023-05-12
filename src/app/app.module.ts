import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TuiButtonModule, TuiRootModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';
import { HttpClientModule } from '@angular/common/http';
import { LottieModule} from 'ngx-lottie';
import player from 'lottie-web';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LogopassComponent } from './logopass/logopass.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    LogopassComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TuiRootModule,
    TuiInputModule,
    TuiButtonModule,
    HttpClientModule,
    LottieModule.forRoot({
      player: playerFactory,
    }),
    TuiRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
