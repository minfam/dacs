import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { MainComponent } from './views/main/main.component';

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
