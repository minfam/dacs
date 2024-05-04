import { Component } from '@angular/core';
import { DashboardComponent } from '../../views/dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
