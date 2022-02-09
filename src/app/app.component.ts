import { Component } from '@angular/core';
import { AppCounterService } from './services/app-counter.service';
import { LocalCounterService } from './services/local-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCounterService],
})
export class AppComponent {
  constructor(
    private appCounterService: AppCounterService,
    private localCounterService: LocalCounterService
  ) {}
  getCounterValue() {
    return this.appCounterService.counter;
  }
  increase() {
    this.appCounterService.increase();
  }
  decrease() {
    this.appCounterService.decrease();
  }
  getLocalCounterValue() {
    return this.localCounterService.counter;
  }
  increaseLocal() {
    this.localCounterService.increase();
  }
  decreaseLocal() {
    this.localCounterService.decrease();
  }
}
