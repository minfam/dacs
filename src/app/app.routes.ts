import { Routes } from '@angular/router';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
];
