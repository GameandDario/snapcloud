import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloudSnapListComponent } from './cloud-snap-list/cloud-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: 'cloudsnaps', component: CloudSnapListComponent },
  { path: '', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
