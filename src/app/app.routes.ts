
import { RouterModule, Routes } from '@angular/router';
import {
  AboutComponent,
  PortafolioComponent,
  ItemComponent
} from "./components/index.paginas";


const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Item', component: ItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});
