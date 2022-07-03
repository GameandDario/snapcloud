import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloudSnapListComponent } from './cloud-snap-list/cloud-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleCloudSnapComponent } from './single-cloud-snap/single-cloud-snap.component';

const routes: Routes = [
  { path: 'cloudsnaps', component: CloudSnapListComponent },
  { path: '', component: LandingPageComponent },
  { path: 'cloudsnaps/:id', component: SingleCloudSnapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
