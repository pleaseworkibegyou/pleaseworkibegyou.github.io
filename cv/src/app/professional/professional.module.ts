import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalRoutingModule } from './professional-routing.module';
import { LandingComponent } from './landing/landing.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    ProfessionalRoutingModule,
    MatSidenavModule,
    NgbModule,
    MatDividerModule
  ]
})
export class ProfessionalModule { }
