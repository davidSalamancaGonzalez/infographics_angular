import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { BarsDoubleComponent } from './pages/bars-double/bars-double.component';
import { DonnutComponent } from './pages/donnut/donnut.component';
import { DonnutHttpComponent } from './pages/donnut-http/donnut-http.component';
import { GraphicBarComponent } from './components/graphic-bar/graphic-bar.component';



@NgModule({
  declarations: [
    BarsComponent,
    BarsDoubleComponent,
    DonnutComponent,
    DonnutHttpComponent,
    GraphicBarComponent,
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    NgChartsModule
  ]
})
export class GraphicsModule { }
