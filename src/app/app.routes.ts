import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { FMSComponent } from './views/fms/fms.component';
import { MainComponent } from './views/main/main.component';
import { MaintenanceComponent } from './views/maintenance/maintenance.component';
import { LoggedComponent } from './views/scan-card/logged/logged.component';
import { ManualLoginComponent } from './views/scan-card/manual-login/manual-login.component';
import { ScanCardComponent } from './views/scan-card/scan-card.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { TicketingComponent } from './views/ticketing/ticketing.component';
import { WelcomeComponent } from './views/welcome/welcome.component';

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
        path: 'welcome',
        component: WelcomeComponent,
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
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
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
        ],
    },
    {
        path: 'scan-card',
        children: [
            {
                path: '',
                component: ScanCardComponent,
            },
            {
                path: 'login-information',
                component: ManualLoginComponent,
            },
            {
                path: 'logged',
                component: LoggedComponent,
            },
        ],
    },
];
