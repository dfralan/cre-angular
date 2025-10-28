import { Routes } from '@angular/router';
import { EcommerceComponent } from './pages/dashboard/ecommerce/ecommerce.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormElementsComponent } from './pages/forms/form-elements/form-elements.component';
import { BasicTablesComponent } from './pages/tables/basic-tables/basic-tables.component';
import { BlankComponent } from './pages/blank/blank.component';
import { NotFoundComponent } from './pages/other-page/not-found/not-found.component';
import { AppLayoutComponent } from './shared/layout/app-layout/app-layout.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { LineChartComponent } from './pages/charts/line-chart/line-chart.component';
import { BarChartComponent } from './pages/charts/bar-chart/bar-chart.component';
import { AlertsComponent } from './pages/ui-elements/alerts/alerts.component';
import { AvatarElementComponent } from './pages/ui-elements/avatar-element/avatar-element.component';
import { BadgesComponent } from './pages/ui-elements/badges/badges.component';
import { ButtonsComponent } from './pages/ui-elements/buttons/buttons.component';
import { ImagesComponent } from './pages/ui-elements/images/images.component';
import { VideosComponent } from './pages/ui-elements/videos/videos.component';
import { SignInComponent } from './pages/auth-pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth-pages/sign-up/sign-up.component';
import { CalenderComponent } from './pages/calender/calender.component';

export const routes: Routes = [
  {
    path:'',
    component:AppLayoutComponent,
    children:[
      {
        path: '',
        component: EcommerceComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | Cre-Angular | Commercial Real Estate Dashboard',
      },
      {
        path:'calendar',
        component:CalenderComponent,
        title:'Angular Calender | Cre-Angular | Commercial Real Estate Dashboard'
      },
      {
        path:'profile',
        component:ProfileComponent,
        title:'Angular Profile Dashboard | Cre-Angular | Commercial Real Estate Dashboard'
      },
      {
        path:'form-elements',
        component:FormElementsComponent,
        title:'Angular Form Elements Dashboard | Cre-Angular | Commercial Real Estate Dashboard'
      },
      {
        path:'basic-tables',
        component:BasicTablesComponent,
        title:'Angular Basic Tables Dashboard | Cre-Angular | Commercial Real Estate Dashboard'
      },
      {
        path:'blank',
        component:BlankComponent,
        title:'Angular Blank Dashboard | Cre-Angular | Commercial Real Estate Dashboard'
      },
      // support tickets
      {
        path:'invoice',
        component:InvoicesComponent,
        title:'Angular Invoice Details Dashboard | Cre-Angular | Commercial Real Estate Dashboard'
      },
      {
        path:'line-chart',
        component:LineChartComponent,
        title:'Angular Line Chart Dashboard | Cre-Angular | Commercial Real Estate Dashboard'
      },
      {
        path:'bar-chart',
        component:BarChartComponent,
        title:'Angular Bar Chart Dashboard | Cre-Angular | Commercial Real Estate Dashboard'
      },
      {
        path:'alerts',
        component:AlertsComponent,
        title:'Angular Alerts Dashboard | Cre-Angular | Commercial Real Estate Dashboard'
      },
      {
        path:'avatars',
        component:AvatarElementComponent,
        title:'Angular Avatars Dashboard | Cre-Angular | Commercial Real Estate Dashboard'
      },
      {
        path:'badge',
        component:BadgesComponent,
        title:'Angular Badges Dashboard | Cre-Angular | Commercial Real Estate Dashboard'
      },
      {
        path:'buttons',
        component:ButtonsComponent,
        title:'Angular Buttons Dashboard | Cre-Angular | Commercial Real Estate Dashboard'
      },
      {
        path:'images',
        component:ImagesComponent,
        title:'Angular Images Dashboard | Cre-Angular | Commercial Real Estate Dashboard'
      },
      {
        path:'videos',
        component:VideosComponent,
        title:'Angular Videos Dashboard | Cre-Angular | Commercial Real Estate Dashboard'
      },
    ]
  },
  // auth pages
  {
    path:'signin',
    component:SignInComponent,
    title:'Angular Sign In Dashboard | Cre-Angular | Commercial Real Estate Dashboard'
  },
  {
    path:'signup',
    component:SignUpComponent,
    title:'Angular Sign Up Dashboard | Cre-Angular | Commercial Real Estate Dashboard'
  },
  // error pages
  {
    path:'**',
    component:NotFoundComponent,
    title:'Angular NotFound Dashboard | Cre-Angular | Commercial Real Estate Dashboard'
  },
];
