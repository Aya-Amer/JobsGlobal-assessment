import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { JobService } from './job.service';
import { Job } from '../shared/job.module';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JobsResolverService implements Resolve<Job[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private jobService: JobService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ){
    const jobs = this.jobService.getJobs();
    if (jobs.length === 0) {
      return this.dataStorageService.fetchJobs();
    } else {
      return jobs;
    }
  }
}
