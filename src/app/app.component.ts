import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Initial';
  // backgroundToggle = false;
  toggle: any = false;
  arr = [1, 1, 2, 3, 5, 8, 13];

  objs = [
    {
      title: 'Post 1',
      author: 'John',
      comments: [
        { name: 'Max', text: 'lorem1' },
        { name: 'Max', text: 'lorem2' },
        { name: 'Max', text: 'lorem3' },
      ],
    },
    {
      title: 'Post 2',
      author: 'John 2',
      comments: [
        { name: 'Max 2', text: 'lorem1' },
        { name: 'Max 2', text: 'lorem2' },
        { name: 'Max 2', text: 'lorem3' },
      ],
    },
  ];

  now: Date = new Date();
  // title = 'Dynamic title';
  // number = 42;
  // arr = [1, 2, 3];

  // obj = { a: 1, b: { c: 2 } };

  // inputValue = '';

  // myInput: string = '';
  constructor() {}

  // onInput(event: Event) {
  //   console.log('Event', event);
  //   this.inputValue = (<HTMLInputElement>event.target).value;
  // }

  // onClick() {
  //   console.log('Click');
  // }

  // onBlur(str: string) {
  //   this.inputValue = str;
  // }

  onInput(event: any) {
    this.title = event.target.value;
  }
}
