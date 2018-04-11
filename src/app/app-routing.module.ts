import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuccokComponent } from './cuccok/cuccok.component';
import { CuccComponent } from './cucc/cucc.component';

const routes: Routes = [
  { path: '', redirectTo: '/cuccok', pathMatch: 'full' },
  { path: 'cuccok', component: CuccokComponent },
  { path: 'cucc/:id', component: CuccComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
