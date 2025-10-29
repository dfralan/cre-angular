import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestApiComponent } from './shared/components/test-api/test-api.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    TestApiComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Commercial Real Estate Dashboard | Cre-Angular';
}
