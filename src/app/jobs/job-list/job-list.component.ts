import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Job } from 'src/app/shared/job.module';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit, OnDestroy {
  jobs: Job[];
  subscription: Subscription;

  constructor(private jobService: JobService) {}
  ngOnInit() {
    this.subscription = this.jobService.jobsChanged.subscribe((jobs: Job[]) => {
      this.jobs = jobs;
    });
    this.jobs = this.jobService.getJobs();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
