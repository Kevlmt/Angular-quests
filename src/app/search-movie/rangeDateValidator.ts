import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export default function rangeDateValidator(
  minDate: number,
  maxDate = new Date().getFullYear()
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value >= minDate && control.value <= maxDate) {
      return null;
    } else {
      return {
        min: { value: control.value, expected: { minDate, maxDate } },
      };
    }
  };
}
