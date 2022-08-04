import { AbstractControl, ValidatorFn } from '@angular/forms';

export default function isRequiredValidator(
  fieldOne: string,
  fieldTwo: string
): ValidatorFn {
  return (group: AbstractControl) => {
    if (
      group.get(fieldOne)?.value === '' &&
      group.get(fieldTwo)?.value === ''
    ) {
      return { isRequired: true };
    }
    return null;
  };
}
