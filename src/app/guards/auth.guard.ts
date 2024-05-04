import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = () => {
    if (inject(AuthService).isLoggedIn()) {
        return true;
    } else {
        inject(Router).navigate(['/sign-in']);
        return false;
    }
};
