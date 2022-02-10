import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class MyValidators {
  static restrictedEmails(
    control: FormControl
  ): { [key: string]: boolean } | null {
    if (['v@mail.ru', 'test@mail.ru'].includes(control.value)) {
      return {
        restrictedEmail: true,
      };
    }
    return null;
  }
  // DON`T WORK DK WHY..
  // static uniqueEmail(control: FormControl): Promise<any> | Observable<any> {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       if (control.value === 'async@mail.ru') {
  //         resolve({ uniqueEmail: true });
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1000);
  //   });
  // }
}
