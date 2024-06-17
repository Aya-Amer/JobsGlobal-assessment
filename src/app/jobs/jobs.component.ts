import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService) {}
  ngOnInit() {
    this.dataStorageService.fetchJobs().subscribe();
  }
}
