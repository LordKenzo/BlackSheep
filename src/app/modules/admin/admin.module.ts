import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.componen';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule, AdminRoutingModule],
})
export class AdminModule {}
