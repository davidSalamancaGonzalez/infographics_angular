import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsDoubleComponent } from './pages/bars-double/bars-double.component';
import { BarsComponent } from './pages/bars/bars.component';
import { DonnutHttpComponent } from './pages/donnut-http/donnut-http.component';
import { DonnutComponent } from './pages/donnut/donnut.component';

const routes: Routes = [
  {
    path: '', 
    children: [
      { path: 'bars',        component: BarsComponent },
      { path: 'barsdouble',  component: BarsDoubleComponent },
      { path: 'donnut',      component: DonnutComponent },
      { path: 'donnut-http', component: DonnutHttpComponent },
      { path: '**',          redirectTo: 'bars' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
