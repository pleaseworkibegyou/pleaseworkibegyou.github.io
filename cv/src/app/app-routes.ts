import { Routes } from '@angular/router'

export const appRoutes: Routes = [
    { path: 'Professional', loadChildren: './professional/professional.module#ProfessionalModule'  },
    { path: 'Personal',      loadChildren: './personal/personal.module#PersonalModule'}
  ];

//   export function loadAboutModule() {
//     return import('./professional/professional.module').then(mod => mod.ProfessionalModule);
//   }
//   export function loadpersonal() {
//     return import('./personal/personal.module').then(mod => mod.PersonalModule);
//   }