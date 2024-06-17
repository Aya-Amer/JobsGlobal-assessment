import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
//import { JobsResolverService } from './jobs/jobs-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  {
    path: 'jobs',
    component: JobsComponent,
    // resolve: [JobsResolverService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
