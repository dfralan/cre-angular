import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableDropdownComponent } from '../../common/table-dropdown/table-dropdown.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { RouterModule } from '@angular/router';

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  brand: string;
  price: string;
  stock: string;
  createdAt: string;
}
interface Sort {
  key: keyof Product;
  asc: boolean;
}

@Component({
  selector: 'app-product-list-table',
  imports: [
    CommonModule,
    TableDropdownComponent,
    ButtonComponent,
    RouterModule,
  ],
  templateUrl: './product-list-table.component.html',
  styles: ``
})
export class ProductListTableComponent {

  products = [
    {
      id: 1,
      name: "Modern Loft in Palermo Soho",
      image: "/images/property/property-01.jpg",
      category: "Apartment", // could be propertyType
      brand: "Palermo Realty", // acts as agency
      price: "$235,000", // listingPrice
      stock: "Available", // availability
      createdAt: "12 Feb, 2027", // listingDate
    },
    {
      id: 2,
      name: "Luxury Penthouse with Terrace",
      image: "/images/property/property-02.jpg",
      category: "Penthouse",
      brand: "Skyline Developments",
      price: "$690,000",
      stock: "Sold",
      createdAt: "13 Mar, 2027",
    },
    {
      id: 3,
      name: "Family House in Belgrano R",
      image: "/images/property/property-03.jpg",
      category: "House",
      brand: "UrbanHome",
      price: "$420,000",
      stock: "Available",
      createdAt: "19 Mar, 2027",
    },
    {
      id: 4,
      name: "Studio Apartment in Recoleta",
      image: "/images/property/property-04.jpg",
      category: "Studio",
      brand: "Recoleta Propiedades",
      price: "$155,000",
      stock: "Available",
      createdAt: "25 Apr, 2027",
    },
    {
      id: 5,
      name: "Beachfront Villa in Mar del Plata",
      image: "/images/property/property-05.jpg",
      category: "Villa",
      brand: "CostaMar Group",
      price: "$980,000",
      stock: "Available",
      createdAt: "11 May, 2027",
    },
    {
      id: 6,
      name: "Office Space in Microcentro",
      image: "/images/property/property-01.jpg",
      category: "Commercial",
      brand: "Downtown Offices",
      price: "$310,000",
      stock: "Available",
      createdAt: "29 Jun, 2027",
    },
    {
      id: 7,
      name: "Luxury Condo in Puerto Madero",
      image: "/images/property/property-02.jpg",
      category: "Condo",
      brand: "RiverView Developments",
      price: "$1,250,000",
      stock: "Sold",
      createdAt: "22 Jul, 2027",
    },
    {
      id: 8,
      name: "Cabin in Bariloche Forest",
      image: "/images/property/property-03.jpg",
      category: "Cabin",
      brand: "Patagonia Estates",
      price: "$330,000",
      stock: "Available",
      createdAt: "05 Aug, 2027",
    },
    {
      id: 9,
      name: "Office Loft in San Telmo",
      image: "/images/property/property-04.jpg",
      category: "Commercial",
      brand: "Heritage Real Estate",
      price: "$190,000",
      stock: "Available",
      createdAt: "18 Aug, 2027",
    },
    {
      id: 10,
      name: "Countryside Farmhouse in Luján",
      image: "/images/property/property-05.jpg",
      category: "Farmhouse",
      brand: "Rural Brokers",
      price: "$460,000",
      stock: "Sold",
      createdAt: "02 Sep, 2027",
    },
    {
      id: 11,
      name: "Downtown Duplex with Balcony",
      image: "/images/property/property-02.jpg",
      category: "Duplex",
      brand: "Capital Living",
      price: "$275,000",
      stock: "Available",
      createdAt: "15 Sep, 2027",
    },
    {
      id: 12,
      name: "Warehouse in Villa Crespo",
      image: "/images/property/property-03.jpg",
      category: "Industrial",
      brand: "MetroPark Realty",
      price: "$520,000",
      stock: "Available",
      createdAt: "28 Sep, 2027",
    },
    {
      id: 13,
      name: "Boutique Hotel in Mendoza",
      image: "/images/property/property-04.jpg",
      category: "Hospitality",
      brand: "Andes Developers",
      price: "$1,350,000",
      stock: "Sold",
      createdAt: "10 Oct, 2027",
    },
    {
      id: 14,
      name: "Retail Storefront in Caballito",
      image: "/images/property/property-05.jpg",
      category: "Commercial",
      brand: "CitySpace Group",
      price: "$245,000",
      stock: "Available",
      createdAt: "23 Oct, 2027",
    },
    {
      id: 15,
      name: "Suburban Home in Pilar",
      image: "/images/property/property-01.jpg",
      category: "House",
      brand: "GreenField Realty",
      price: "$375,000",
      stock: "Available",
      createdAt: "05 Nov, 2027",
    },
    {
      id: 16,
      name: "Mountain Lodge in Ushuaia",
      image: "/images/property/property-02.jpg",
      category: "Lodge",
      brand: "Tierra del Fuego Properties",
      price: "$780,000",
      stock: "Available",
      createdAt: "18 Nov, 2027",
    },
    {
      id: 17,
      name: "Smart Apartment in Núñez",
      image: "/images/property/property-03.jpg",
      category: "Apartment",
      brand: "NextLiving",
      price: "$210,000",
      stock: "Sold",
      createdAt: "01 Dec, 2027",
    },
    {
      id: 18,
      name: "Warehouse Loft Conversion",
      image: "/images/property/property-04.jpg",
      category: "Loft",
      brand: "UrbanRenew Projects",
      price: "$290,000",
      stock: "Available",
      createdAt: "14 Dec, 2027",
    },
    {
      id: 19,
      name: "Lake House in Tigre Delta",
      image: "/images/property/property-05.jpg",
      category: "House",
      brand: "Delta Homes",
      price: "$495,000",
      stock: "Available",
      createdAt: "27 Dec, 2027",
    },
    {
      id: 20,
      name: "Investment Lot in Escobar",
      image: "/images/property/property-01.jpg",
      category: "Land",
      brand: "Terranova Brokers",
      price: "$85,000",
      stock: "Available",
      createdAt: "09 Jan, 2028",
    },
  ];

  selected: number[] = [];
  sort: Sort = { key: 'name', asc: true };
  page: number = 1;
  perPage: number = 7;
  showFilter: boolean = false;

  ngOnInit() {
    // Initialize component
  }

  sortedProducts(): Product[] {
    return [...this.products].sort((a, b) => {
      let valA: any = a[this.sort.key];
      let valB: any = b[this.sort.key];
      if (this.sort.key === 'price') {
        valA = parseFloat(valA.replace(/[^\d.]/g, ''));
        valB = parseFloat(valB.replace(/[^\d.]/g, ''));
      }
      if (valA < valB) return this.sort.asc ? -1 : 1;
      if (valA > valB) return this.sort.asc ? 1 : -1;
      return 0;
    });
  }

  paginatedProducts(): Product[] {
    const start = (this.page - 1) * this.perPage;
    return this.sortedProducts().slice(start, start + this.perPage);
  }

  totalPages(): number {
    return Math.ceil(this.products.length / this.perPage);
  }

  goToPage(n: number): void {
    if (n >= 1 && n <= this.totalPages()) {
      this.page = n;
    }
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
    }
  }

  nextPage(): void {
    if (this.page < this.totalPages()) {
      this.page++;
    }
  }

  toggleSelect(id: number): void {
    this.selected = this.selected.includes(id)
      ? this.selected.filter((i) => i !== id)
      : [...this.selected, id];
  }

  toggleAll(): void {
    const ids = this.paginatedProducts().map((p) => p.id);
    this.selected = this.isAllSelected()
      ? this.selected.filter((id) => !ids.includes(id))
      : [...new Set([...this.selected, ...ids])];
  }

  isAllSelected(): boolean {
    const ids = this.paginatedProducts().map((p) => p.id);
    return ids.length > 0 && ids.every((id) => this.selected.includes(id));
  }

  startItem(): number {
    return this.products.length === 0 ? 0 : (this.page - 1) * this.perPage + 1;
  }

  endItem(): number {
    return Math.min(this.page * this.perPage, this.products.length);
  }

  sortBy(key: keyof Product): void {
    this.sort = {
      key,
      asc: this.sort.key === key ? !this.sort.asc : true,
    };
  }

  toggleFilter(): void {
    this.showFilter = !this.showFilter;
  }

   handleViewMore() {
    console.log('View More clicked');
    // Add your view more logic here
  }

  handleDelete() {
    console.log('Delete clicked');
    // Add your delete logic here
  }
}
