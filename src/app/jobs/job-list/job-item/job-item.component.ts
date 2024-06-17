import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/shared/job.module';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.css'],
})
export class JobItemComponent implements OnInit {
  @Input() job: Job;
  @Input() index: number;
  constructor() {}
  ngOnInit() {
    // const backgroundPhoto = `url(${this.job.cover})`;
  }
  openJobDetailsDialog() {}
}
