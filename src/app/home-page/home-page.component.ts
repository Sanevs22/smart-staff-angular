import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomePageService } from './home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
})
export class HomePageComponent {
  constructor(private homePageService: HomePageService) {}
  loginForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
  });

  login() {
    if (
      this.loginForm.controls.email.value !== null &&
      this.loginForm.controls.password.value
    ) {
      this.homePageService.login(
        this.loginForm.controls.email.value,
        this.loginForm.controls.password.value
      );
    }
  }
}
