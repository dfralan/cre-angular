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

    <button 
      (click)="callApi()" 
      class="mt-2 px-3 py-1 bg-blue-600 text-white rounded disabled:opacity-60"
      [disabled]="loading">
      {{ loading ? 'Loading...' : 'Call API' }}
    </button>

    <!-- Loader visual -->
    <div *ngIf="loading" class="flex items-center mt-4">
      <div class="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-600 mr-2"></div>
      <span class="text-blue-600">Loading...</span>
    </div>

    <!-- Result -->
    <pre class="mt-3 bg-gray-100 p-2 rounded text-sm overflow-x-auto" *ngIf="!loading && result">{{ result | json }}</pre>

    <!-- Error -->
    <div *ngIf="!loading && error" class="mt-2 text-red-600">Error: {{ error }}</div>
  </div>
  `
})
export class TestApiComponent implements OnInit {
  result: any = null;
  error: any = null;
  loading = false;

  constructor(private api: ApiService) {}

  ngOnInit(): void {}

  callApi() {
    this.result = null;
    this.error = null;
    this.loading = true;

    this.api.getDashboardData().subscribe({
      next: (r) => {
        this.result = r;
        this.loading = false;
      },
      error: (e) => {
        this.error = e?.message || e;
        this.loading = false;
      }
    });
  }
}
