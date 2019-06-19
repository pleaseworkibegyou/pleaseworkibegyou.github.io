import { Routes } from '@angular/router'

export const appRoutes: Routes = [
    { path: 'Professional', loadChildren: loadAboutModule  },
    { path: 'Personal',      loadChildren: loadpersonal}
  ];

  export function loadAboutModule() {
    return import('./professional/professional.module').then(mod => mod.ProfessionalModule);
  }
  export function loadpersonal() {
    return import('./personal/personal.module').then(mod => mod.PersonalModule);
  }