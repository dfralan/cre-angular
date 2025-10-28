import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FaqItemOneComponent } from '../faq-item-one/faq-item-one.component';

@Component({
  selector: 'app-faqs-one',
  imports: [
    CommonModule,
    FaqItemOneComponent,
  ],
  templateUrl: './faqs-one.component.html',
  styles: ``
})
export class FaqsOneComponent {

  faqs = [
    {
      title: 'Can I automatically update property listings?',
      content:
        'Yes, Cre-Angular allows you to sync property data with your backend or database in real-time, ensuring that all listings are always up to date.',
    },
    {
      title: 'Can I customize the dashboard appearance?',
      content:
        'Absolutely! Cre-Angular offers various themes and layout options that you can easily customize to match your branding and preferences.',
    },
    {
      title: 'Can I add my own KPIs and metrics?',
      content:
        'Yes, you can easily add custom metrics such as occupancy, revenue, rent performance, and any other key indicators relevant to your property portfolio by integrating your own data sources.',
    },
    {
      title: 'How many properties can I manage on the platform?',
      content:
        'There is no limit to the number of properties you can manage. The platform is designed to scale and handle large datasets without affecting performance.',
    },
  ];


  openIndex: number | null = 0; // Initially open the first accordion

  toggleAccordion(index: number): void {
    this.openIndex = this.openIndex === index ? null : index; // Close if open, otherwise open the clicked one
  }
}
