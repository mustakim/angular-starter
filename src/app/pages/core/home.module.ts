import {
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule
} from '@nebular/theme';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {}
