import {
  trigger,
  transition,
  style,
  animate,
  keyframes
} from '@angular/animations';

export const slideRight = trigger('slideRight', [
  transition(':enter', [
    animate(
      '0.3s ease-out',
      keyframes([
        style({
          width: '0px',
          opacity: 0,
          offset: 0
        }),
        style({
          width: '500px',
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
          width: '500px',
          opacity: 1,
          offset: 0
        }),
        style({
          width: '0px',
          opacity: 0,
          offset: 1
        })
      ])
    )
  ])
]);
