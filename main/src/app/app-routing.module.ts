import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import * as shared from '@app/shared';

const routes: Routes = [
	{ path: 'about', component: shared.AboutComponent },
	{ path: 'help', component: shared.HelpComponent },
	{ path: '**', component: shared.AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  declarations: [
  	shared.AboutComponent,
  	shared.HelpComponent
  ]
})
export class AppRoutingModule { }
