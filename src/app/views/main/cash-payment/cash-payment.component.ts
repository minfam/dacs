import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router, ActivatedRoute } from '@angular/router';

import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';
import { CustomKeyboardComponent } from '@components/custom-keyboard/custom-keyboard.component';

@Component({
    selector: 'cash-payment',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        ConfirmDialogComponent,
        CustomKeyboardComponent,
    ],
    templateUrl: './cash-payment.component.html',
    styleUrls: ['./cash-payment.component.scss'],
})
export class CashPaymentComponent {
    fareMode: string = 'single';
    singleCashValue: number = 0;
    cashType: string = '';
    quantity: number = 0;
    adultValues: number[] = [120, 140, 160, 180, 200, 220, 230, 240, 250];
    seniorValues: number[] = [100, 130, 150];
    childValues: number[] = [65, 85, 105];
    quantityList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    step = 0;
    progress: number;
    inputValue: string;

    constructor(
        private router: Router,
        private activeRouter: ActivatedRoute,
    ) {
        this.progress = 0;
        this.inputValue = '';
    }

    setFareMode(mode: string): void {
        this.fareMode = mode;
    }

    setCash(cashType: string, value: number): void {
        this.cashType = cashType;
        this.singleCashValue = value;
    }

    setQuantity(quantity: number): void {
        this.quantity = quantity;
    }

    backToMain(): void {
        this.router.navigate(['/main']);
    }

    goBack(): void {
        this.singleCashValue = 0;
        this.quantity = 0;
        this.step = 0;
    }

    handlePrintTicket(): void {
        if (this.singleCashValue !== 0) {
            this.step = 1;
        }
    }

    handleChangeInput(event: Event): void {
        const inputField = <HTMLInputElement>document.getElementById('inputField');
        const start = inputField?.selectionStart || 0;
        const end = inputField?.selectionEnd || 0;
        const value = inputField.value;
        const target = <HTMLDivElement>event.target;

        if (target.id === 'backspaceKey') {
            if (start === end) {
                // No selection, just delete the character before the cursor
                inputField.value = value.slice(0, start - 1) + value.slice(end);
                inputField.selectionStart = inputField.selectionEnd = start - 1;
                this.quantity = Number(value.slice(0, start - 1) + value.slice(end));
            } else {
                // There is a selection, delete the selected text
                inputField.value = value.slice(0, start) + value.slice(end);
                inputField.selectionStart = inputField.selectionEnd = start;
                this.quantity = Number(value.slice(0, start) + value.slice(end));
            }
        } else if (target.id === 'enterKey') {
            if (!value) return;
            this.inputValue = value;
            this.quantity = Number(value);
            this.handlePrintingTicket();
        } else {
            const keyValue = target.innerText.trim();
            inputField.value = value.slice(0, start) + keyValue + value.slice(end);
            inputField.selectionStart = inputField.selectionEnd = start + keyValue.length;
            this.quantity = Number(value.slice(0, start) + keyValue + value.slice(end));
        }

        inputField.focus();
    }

    handlePrintingTicket() {
        this.step = 2;
        const interval = setInterval(() => {
            this.progress += 5;
            if (this.progress >= 100) {
                clearInterval(interval);
                this.step = 3;
            }
        }, 500);
    }

    handleFinish(): void {
        this.router.navigate(['/main']);
    }
}
