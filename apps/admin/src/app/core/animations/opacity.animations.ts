import {
  trigger,
  transition,
  style,
  animate,
  keyframes
} from '@angular/animations';

export const opacity = trigger('opacity', [
  transition(':enter', [
    animate(
      '0.3s ease-out',
      keyframes([
        style({
          opacity: 0,
          offset: 0
        }),
        style({
          opacity: 1,
          offset: 1
        })
      ])
    )
  ]),
  transition(':leave', [
    animate(
      '0.3s ease-in',
      keyframes([
        style({
          opacity: 1,
          offset: 0
        }),
        style({
          opacity: 0,
          offset: 1
        })
      ])
    )
  ])
]);
