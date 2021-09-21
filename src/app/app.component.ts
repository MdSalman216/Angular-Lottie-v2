import { Component } from '@angular/core';

// lottie imports
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

// Font Awesome imports
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { faStopCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // font awesome icons
  faPlayCircle = faPlayCircle;
  faPauseCircle = faPauseCircle;
  faStopCircle = faStopCircle;

  options: AnimationOptions = {
    path: '/assets/donut.json',
    autoplay: true,
    loop: true,
  };

  animationCreated(anim: any): void {
    this.anim = anim;
    this.anim.name = 'DonutChart';
    console.warn(anim);
  }

  private anim: any;
  public animationSpeed: number = 1;

  stop() {
    this.anim.stop();
  }

  play() {
    this.anim.play();
  }

  pause() {
    this.anim.pause();
  }

  setSpeed(speed: string) {
    this.animationSpeed = Number(speed);
    this.anim.setSpeed(Number(speed));
  }
}
