import { trigger, style, transition, animate, state } from "@angular/animations";

export const showUp =
  trigger('showUp', [
    state('0', style({
      maxHeight: '40px'
    })),
    state('1', style({
      maxHeight: '500px'
    })),
    transition('0 => 1', animate('0.4s ease-out')),
    transition('1 => 0', animate('0.2s ease-out'))
  ]);
