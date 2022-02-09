import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  promise: Promise<string> = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Promise Resolved');
    }, 4000);
  });

  date$: Observable<Date> = new Observable((obs) => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  date!: Date;
  ngOnInit(): void {
    this.date$.subscribe((date) => {
      this.date = date;
    });
  }
  // search = '';
  // searchField = 'title';
  // posts: Post[] = [
  //   { title: 'Beer', text: 'The absolutely best beer in the world!' },
  //   { title: 'Bread', text: 'The best bread in the world!' },
  //   { title: 'JavaScript', text: 'The best language in the world!' },
  // ];
  // addPost() {
  //   this.posts.unshift({
  //     title: 'Angular 9',
  //     text: 'Vladilen Angular 9 course',
  //   });
  // }
  // e: number = Math.E;
  // str = 'hello world';
  // date: Date = new Date();
  // float = 0.42;
  // obj = {
  //   a: 1,
  //   b: {
  //     c: 2,
  //     d: {
  //       e: 3,
  //       f: 4,
  //     },
  //   },
  // };
}
