import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AbToolTipsComponent } from './ab-tool-tips/ab-tool-tips.component';

const routes: Routes = [
  { path: '', redirectTo: '/tooltips', pathMatch: 'full' },
  { path: 'tooltips', component: AbToolTipsComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
