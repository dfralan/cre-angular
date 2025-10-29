import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestApiComponent } from './shared/components/test-api/test-api.component';
import { ApiService } from './shared/services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    TestApiComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Commercial Real Estate Dashboard | Cre-Angular';
  apiStatus: string = 'Testing API...';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    console.log('Environment:', {
      production: environment.production,
      apiUrl: environment.apiUrl
    });
    this.testApiConnection();
  }

  testApiConnection() {
    this.apiService.getDashboardData().subscribe({
      next: (response) => {
        this.apiStatus = 'API Connection Successful! ' + JSON.stringify(response);
        console.log('API Response:', response);
      },
      error: (error) => {
        this.apiStatus = 'API Error: ' + error.message;
        console.error('API Error:', error);
      }
    });
  }
}
