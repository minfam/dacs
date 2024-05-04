import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
    const authToken = 'Token Value';
    const authReq = req.clone({
        setHeaders: {
            Authorization: `Bearer ${authToken}`,
        },
    });

    return next(authReq).pipe(
        catchError((err: unknown) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    console.error('Unauthorized request:', err);
                } else {
                    // Handle other HTTP error codes
                    console.error('HTTP error:', err);
                }
            } else {
                console.error('An error occurred:', err);
            }
            return throwError(() => err);
        }),
    );
};
