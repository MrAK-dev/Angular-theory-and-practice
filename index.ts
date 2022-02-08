let str: string = 'Hello Typescript';
let num: number = 42;
let isActive: boolean = false;

let strArray: string[] = ['H', 'e', 'l', 'l'];
let numArray: Array<number> = [1, 1, 2, 3];

// Functions

function loginfo(name: string, age: number): void {
  console.log(`Info: ${name}, ${age}`);
}

loginfo('John', 25);

function calc(a: number, b: number | string): number {
  if (typeof b === 'string') b = +b;
  return a + b;
}
console.log(calc(2, 'f'));

// Classes

class Server {
  static VERSION = '1.0.3';

  private status: string = 'working';

  constructor(public name: string, protected ip: number) {}

  public turnOn() {
    this.status = 'working';
  }

  protected turnOff() {
    this.status = 'offline';
  }

  public getStatus(): string {
    return this.status;
  }
}

const server: Server = new Server('AWS', 1234);

// Interfaces and objects

interface UserInterface {
  name: string;
  age: number;
  logInfo: () => void;
  id?: any;
}

const user: UserInterface = {
  name: 'John',
  age: 25,
  logInfo() {
    console.log(this.name + ' ' + this.age);
  },
};

// Interfaces and classes
interface SayHello {
  sayHello: () => void;
}
class User implements SayHello {
  constructor(private name: string, private age: number) {}
  sayHello() {
    console.log(this.name + ' Hello!');
  }
}

// Generic types

const arr: Array<number> = [1, 2, 3, 4];

interface TestUser {
  id: number;
  name: string;
  age: number;
}

const users: Array<TestUser> = [
  { id: 1, name: 'J', age: 22 },
  { id: 2, name: 'O', age: 25 },
];

const users2: TestUser[] = [
  { id: 1, name: 'J', age: 22 },
  { id: 2, name: 'O', age: 25 },
];
