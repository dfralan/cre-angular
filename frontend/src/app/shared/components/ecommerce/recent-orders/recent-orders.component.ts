// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-recent-orders',
//   imports: [CommonModule],
//   templateUrl: './recent-orders.component.html',
//   styleUrl: './recent-orders.component.css'
// })
// export class RecentOrdersComponent {

// }


import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { TableComponent } from '../../ui/table/table.component';
// import { TableBodyComponent } from '../../ui/table/table-body.component';
// import { TableCellComponent } from '../../ui/table/table-cell.component';
// import { TableHeaderComponent } from '../../ui/table/table-header.component';
// import { TableRowComponent } from '../../ui/table/table-row.component';
import { BadgeComponent } from '../../ui/badge/badge.component';

interface Product {
  id: number;
  name: string; // Property title
  variants: string; // Could represent units, rooms, or similar info
  category: string; // Property type
  price: string; // Listing price
  image: string;
  status: 'Listed' | 'Under Offer' | 'Sold'; // Adapted real estate statuses
}

@Component({
  selector: 'app-recent-orders',
  imports: [
    CommonModule,
    // TableComponent,
    // TableBodyComponent,
    // TableCellComponent,
    // TableHeaderComponent,
    // TableRowComponent,
    BadgeComponent,
  ],
  templateUrl: './recent-orders.component.html'
})
export class RecentOrdersComponent {
  tableData: Product[] = [
    {
      id: 1,
      name: "Modern Loft in Palermo Soho",
      variants: "2 Units Available",
      category: "Apartment",
      price: "$235,000",
      status: "Listed",
      image: "/images/property/property-01.png",
    },
    {
      id: 2,
      name: "Luxury Penthouse with Terrace",
      variants: "1 Unit",
      category: "Penthouse",
      price: "$690,000",
      status: "Under Offer",
      image: "/images/property/property-02.png",
    },
    {
      id: 3,
      name: "Family House in Belgrano R",
      variants: "1 Unit",
      category: "House",
      price: "$420,000",
      status: "Listed",
      image: "/images/property/property-03.png",
    },
    {
      id: 4,
      name: "Studio Apartment in Recoleta",
      variants: "3 Units",
      category: "Studio",
      price: "$155,000",
      status: "Sold",
      image: "/images/property/property-04.png",
    },
    {
      id: 5,
      name: "Beachfront Villa in Mar del Plata",
      variants: "1 Unit",
      category: "Villa",
      price: "$980,000",
      status: "Listed",
      image: "/images/property/property-05.png",
    },
  ];

  getBadgeColor(status: string): 'success' | 'warning' | 'error' {
    if (status === 'Listed') return 'success';      // Available / Active listing
    if (status === 'Under Offer') return 'warning'; // Pending negotiation
    return 'error';                                 // Sold
  }
}