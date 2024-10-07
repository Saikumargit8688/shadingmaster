import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';

import {MatDividerModule} from '@angular/material/divider';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { ServiceComponent } from './service/service.component';
import { OutdoorshadingComponent } from './outdoorshading/outdoorshading.component';
import { IndoorshadingComponent } from './indoorshading/indoorshading.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    InspirationComponent,
    ServiceComponent,
    OutdoorshadingComponent,
    IndoorshadingComponent,
    FooterComponent,
   
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatDividerModule,
    MatSelectModule,
    MatCardModule
  ]
})
export class DashboardModule { }
