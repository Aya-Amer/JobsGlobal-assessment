import { Subject } from 'rxjs';
import { Job } from '../shared/job.module';

export class JobService {
  jobsChanged = new Subject<Job[]>();
  private jobs: Job[] = [];
  constructor() {}
  setJobs(jobs: Job[]) {
    this.jobs = jobs;
    debugger;
    this.jobsChanged.next(this.jobs.slice());
  }
  getJobs() {
    debugger;
    if (this.jobs.length) {
      console.log(this.jobs, 'this.jobs');

      let x = this.jobs.slice();
      console.log(x, 'x');
      return x;
    }
  }
}
