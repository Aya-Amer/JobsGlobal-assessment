import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { JobsComponent } from './jobs/jobs.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobItemComponent } from './jobs/job-list/job-item/job-item.component';
import { EffectsModule } from '@ngrx/effects';
import { JobService } from './jobs/job.service';
import { HttpClientModule } from '@angular/common/http';
// import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    JobListComponent,
    JobItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // MatDialogModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
  ],
  providers: [JobService],
  bootstrap: [AppComponent],
})
export class AppModule {}
