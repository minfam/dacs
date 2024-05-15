import { CommonModule } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

interface I_Logged {
    serviceNumber: string;
    dutyNumber: string;
    busNumber: string;
    startingBusStop: string;
    staffId: string;
}

@Component({
    selector: 'app-logged',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
    templateUrl: './logged.component.html',
    styleUrl: './logged.component.scss',
})
export class LoggedComponent {
    currentDate: Date = new Date();
    private timer: any;

    data: I_Logged = {
        dutyNumber: '1234',
        staffId: '123456',
        busNumber: '166',
        serviceNumber: '1234',
        startingBusStop: '12345 - Opp Sembawang Air Base',
    };

    constructor(
        private ngZone: NgZone,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.ngZone.runOutsideAngular(() => {
            this.timer = setInterval(() => {
                this.ngZone.run(() => {
                    this.currentDate = new Date();
                });
            }, 1000);
        });
    }

    ngOnDestroy(): void {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    backManualLogin() {
        this.router.navigate(['/scan-card/login-information']);
    }
}
