import {animate, group, query, style, transition, trigger} from "@angular/animations";

export const loadAnimations =
  [trigger('pageInitialized', [
    transition('* => 1', [
      query('.left-coin', style({
        opacity: 0, transform: 'translateX(50px)'
      })),
      query('.right-coin', style({
        opacity: 0, transform: 'translateY(250px)'
      })),
      query('.left-coin', style({
        opacity: 0, transform: 'translateY(250px)'
      })),
      query('.rays', style({
        opacity: 0, bottom: '-250px'
      })),
      query('.coin-pot', style({
        opacity: 0, bottom: '-250px'
      })),
      query('.cta-wrapper .cta:nth-child(2)', style({
        transform: 'translateY(100px)', opacity: 0
      }), {optional: true}),
      query('.cta-wrapper .cta > div', style({
        transform: 'translateY(100px)', opacity: 0
      }), {optional: true}),
      query('.cta-wrapper.small .cta', style({
        transform: 'translateY(100px)', opacity: 0
      }), {optional: true}),
      query('.sub-wrapper .sub', style({
        transform: 'translateY(100px)', opacity: 0
      })),
      query('.instructions', style({
        opacity: 0, transform: 'translateY(50px)'
      })),
      query('button', style({
        opacity: 0, transform: 'translateY(100px)'
      })),
      group([
        group([
          query('.instructions', animate('.3s ease-in', style({
            opacity: 1, transform: '*'
          }))),
          query('button', animate('.6s ease-in-out', style({
            opacity: 1, transform: '*'
          })))]),
        group([
          query('.left-coin', animate('.5s .2s ease-in', style({
            opacity: 1, transform: '*'
          }))),
          query('.right-coin', animate('.5s .2s ease-in', style({
            opacity: 1, transform: '*'
          }))),
          query('.rays', animate('.4s .2s ease-in', style({
            opacity: 1, bottom: '*'
          }))),
          query('.coin-pot', animate('.4s .2s ease-in', style({
            opacity: 1, bottom: '*'
          })))
        ]),
        group([
          group([
            query('.cta-wrapper .cta:nth-child(2)', animate(300, style({
              transform: '*', opacity: 1
            })), {optional: true}),
            query('.cta-wrapper .cta > div', animate(300, style({
              transform: '*', opacity: 1
            })), {optional: true}),
            query('.cta-wrapper.small .cta', animate(300, style({
              transform: '*', opacity: 1
            })), {optional: true})]),
          query('.sub-wrapper .sub', animate('.4s linear', style({
            opacity: 1, transform: '*'
          })))], {delay: 500})
      ])
    ])
  ])];
