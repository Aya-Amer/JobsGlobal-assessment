import { HttpClient } from '@angular/common/http';
import { Job } from './job.module';
import { map, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { JobService } from '../jobs/job.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private jobService: JobService) {}
  fetchJobs() {
    return this.http
      .get<Job[]>(
        'https://development-api-next.jobsglobal.com:54902/api/v1/jobs/all?pagination_type=paginate&per_page=11'
      )
      .pipe(
        // map((jobs) => {
        //   return jobs.map((job) => {
        //     return {
        //       ...job,
        //     };
        //   });
        // }),

        // map((jobs) => {
        //   return {
        //     ...Object.values(jobs),
        //   };
        // }),

        tap((jobs) => {
          let data = [...Object.values(jobs)];
          console.log(data, 'data');

          this.jobService.setJobs(data);
        })
      );
  }
}
