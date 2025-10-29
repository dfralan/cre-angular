import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-test-api',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] p-6">
      <h3 class="text-lg font-bold dark:text-white">API Test</h3>
      <button (click)="callApi()" class="mt-2 px-3 py-1 bg-blue-600 text-white rounded">Call API</button>
      <pre class="mt-3 bg-gray-100 p-2 rounded" *ngIf="result">{{ result | json }}</pre>
      <div *ngIf="error" class="mt-2 text-red-600">Error: {{ error }}</div>
  </div>
  `
})
export class TestApiComponent implements OnInit {
  result: any = null;
  error: any = null;

  constructor(private api: ApiService) {}

  ngOnInit(): void {}

  callApi() {
    this.result = null;
    this.error = null;
    this.api.getDashboardData().subscribe({
      next: (r) => (this.result = r),
      error: (e) => (this.error = e?.message || e)
    });
  }
}
