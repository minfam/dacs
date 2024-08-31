import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app.state';
import { updateFreeCVs } from '@app/store/main/main.reducer';

@Component({
    selector: 'free',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
    templateUrl: './free.component.html',
    styleUrls: ['./free.component.scss'],
})
export class FreeComponent {
    constructor(
        private router: Router,
        private store: Store<AppState>,
    ) {}

    backToMain(): void {
        this.router.navigate(['/main']);
    }

    handleFreeRideMode(): void {
        this.store.dispatch(updateFreeCVs({ payload: [1, 2, 3, 4, 5, 6] }));
        this.backToMain();
    }
}
