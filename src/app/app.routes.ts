import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { FMSComponent } from './views/fms/fms.component';
import { MainComponent } from './views/main/main.component';
import { MaintenanceComponent } from './views/maintenance/maintenance.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { TicketingComponent } from './views/ticketing/ticketing.component';

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
        path: 'main',
        component: MainComponent,
    },
    {
        path: 'ticketing',
        component: TicketingComponent,
    },
    {
        path: 'fms',
        component: FMSComponent,
    },
    {
        path: 'maintenance',
        component: MaintenanceComponent,
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
