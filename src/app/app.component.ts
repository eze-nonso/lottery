import {AfterViewInit, Component} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {loadAnimations} from "src/app/load-animations";
import {timer} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: loadAnimations
})
export class AppComponent implements AfterViewInit {
  title = 'lottery';
  public currentDay = 1;
  public totalDays = 5;
  public matIcons = ['calendar', 'bulb'];
  public bgImageSmall = {
    background: "url(assets/images/background_small.png) no-repeat center center," +
      "url(assets/images/top-stars_small.png) no-repeat center bottom 150px / 100% 70% fixed;"
  };
  public bgImage = {
    background: "url(assets/images/background.png) no-repeat center center," +
      "url(assets/images/top-stars.png) no-repeat center 16% / 80%;"
  };
  public coinPotSmall = {background: "url(assets/images/coin-pot.png) no-repeat center bottom / 425px;"};
  public coinPot = {background: "url(assets/images/coin-pot.png) no-repeat center bottom / 400px;"};
  public nine = Array(9).fill('');
  public three = Array(3).fill('');
  public stars = ['star_circle', 'star_thin', 'star_thick', 'star_thick2'].flatMap(i => [i, i]);
  public pageLoaded = '0';
  private _anglePerRotation = 40;

  constructor(private _matIconReg: MatIconRegistry,
              private _domSanitizer: DomSanitizer) {
    this.matIcons.forEach(icon => {
      this._matIconReg.addSvgIcon(
        icon,
        this._domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`)
      );
    });
  }

  public get animationDelay(): { [key: string]: string } {
    return {'animation-delay': `${Math.floor(Math.random() * 10)}s`};
  }

  public trackByFn(_: number, item: any): number {
    return item;
  }

  public ngAfterViewInit(): void {
    timer(20).subscribe(() => this.pageLoaded = '1');
  }

  public rotate(index: number): { [key: string]: string } {
    return {
      transform: `rotate(${index * this._anglePerRotation}deg) scaleX(1.5)`,
      background: 'url("assets/images/rectangle.svg") no-repeat center bottom / 150%'
    };
  }

  public getStarStyle(star: string): { [key: string]: string } {
    return {
      background: `url(assets/images/${star}.png) no-repeat center center / contain`,
      left: `${Math.floor(Math.random() * 400) - 200}px`
    };
  }
}
