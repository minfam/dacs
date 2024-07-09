import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { NumericKeypadComponent } from '../../../components/common/numeric-keypad/numeric-keypad.component';

@Component({
    standalone: true,
    selector: 'app-manual-login',
    imports: [
        CommonModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        NumericKeypadComponent,
    ],
    templateUrl: './manual-login.component.html',
    styleUrls: ['./manual-login.component.scss'],
})
export class ManualLoginComponent implements OnInit, OnDestroy {
    currentDate: Date = new Date();
    currentInput = '';
    private timer: any;

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

    appendNumber(number: string) {
        this.currentInput += number;
    }

    handleDelete() {
        this.currentInput = this.currentInput.substring(0, this.currentInput.length - 1);
    }

    handleConfirm() {
        console.log('Confirmed with input:', this.currentInput);
    }

    backScanCard() {
        this.router.navigate(['/scan-card']);
    }
}
