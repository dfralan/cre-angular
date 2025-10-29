import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from './shared/services/api.service';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
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
  }
}
