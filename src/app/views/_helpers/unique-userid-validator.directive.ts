import { Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/shared/api.service';
import { map } from 'rxjs/operators';


export function UniqueUseridValidator(apiService: ApiService): AsyncValidatorFn {
  const headers = {
    'Authorization': window.localStorage.getItem('mean-token')
  };
  return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    console.log('c value');
    console.log(c.value);
    const tempObj = new Object();
    tempObj['userId'] = c.value;
    console.log(tempObj);
    return apiService.postRequest('users/validateUserId', tempObj, true, headers).pipe(
      map(users => {
        console.log(users.data);
        if (users.data === true) {
          return users;
        }
        return users && users.length > 0 ? { 'uniqueUserid': true } : null;
      })
    );
  };
}
@Directive({
  selector: '[appUniqueUseridValidator]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueUseridValidatorDirective, multi: true }]
})
export class UniqueUseridValidatorDirective implements AsyncValidator {

  constructor(private apiService: ApiService) { }
  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return UniqueUseridValidator(this.apiService)(c);
  }

}
