import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ErrorsHandlerService} from "./errors-handler.service";
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  showLottie = false;
  lottieOptions: AnimationOptions = {
    path: 'https://assets5.lottiefiles.com/packages/lf20_pNx6yH.json',
    loop: true,
    autoplay: true,
  };

  constructor(private myService: ErrorsHandlerService) { }

  public getData(): void {
    this.myService.getData().subscribe(
      response => {
        // handle response
      },
      error => {
        if (error.status === 404) {
          this.showLottie = true;
        } else {
          this.showLottie = true;
        }
      }
    );
  }
}
