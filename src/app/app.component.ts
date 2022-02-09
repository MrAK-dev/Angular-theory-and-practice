import { Component } from '@angular/core';
import { Subscription, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  subscription!: Subscription;
  stream$: Subject<number> = new Subject<number>();
  counter = 0;
  constructor() {
    this.subscription = this.stream$.subscribe((value) => {
      console.log('Subscribe', value);
    });
    // const stream$ = new Observable((observer) => {
    //   setTimeout(() => {
    //     observer.next(1);
    //   }, 1500);
    //   setTimeout(() => {
    //     observer.complete();
    //   }, 2100);
    //   setTimeout(() => {
    //     observer.error('Something went wrong!');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next(2);
    //   }, 2500);
    // });
    // this.subscription = stream$.subscribe({
    //   next: (value) => {
    //     console.log('Next', value);
    //   },
    //   error: (error) => console.log('Error', error),
    //   complete: () => console.log('Complete'),
    // });
  }

  stop() {
    this.subscription.unsubscribe();
  }

  next() {
    this.counter++;
    this.stream$.next(this.counter);
  }
}
