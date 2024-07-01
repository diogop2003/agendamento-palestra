import { AbstractControl, ValidatorFn } from '@angular/forms';

export function dateBeforeTodayValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const selectedDate = new Date(control.value);
    const today = new Date();

    selectedDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      return { 'dateBeforeToday': true };
    }

    return null;
  };
}
