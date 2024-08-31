import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';
import { CustomKeyboardComponent } from '@components/custom-keyboard/custom-keyboard.component';

@Component({
    standalone: true,
    selector: 'ticketing-console-date-setting',
    imports: [
        CommonModule,
        MatIconModule,
        RouterModule,
        ReactiveFormsModule,
        ConfirmDialogComponent,
        CustomKeyboardComponent,
    ],
    templateUrl: './date-setting.component.html',
    styleUrls: ['./date-setting.component.scss'],
})
export class TicketingConsoleDateSettingComponent implements OnInit {
    step: number;
    currentDate: string;
    inputValue: string;
    success: boolean = true;

    constructor(private router: Router) {
        this.currentDate = '25/02/2024';
        this.inputValue = '';
        this.step = 1;
    }

    ngOnInit() {}

    goBack() {
        this.router.navigate(['/maintenance/ticketing/ticketing-console']);
    }

    handleSetTime() {
        this.step = 2;
    }

    private handleConfirmDate(value: string) {
        this.inputValue = value;
        this.step = 3;
        if (isNaN(Number(value)) || value.length !== 8) {
            this.success = false;
        }

        const dateArray = this.inputValue.match(/.{1,2}/g);
        if (Number(dateArray?.[0] || 0) > 31 || Number(dateArray?.[1] || 0) > 12) {
            this.success = false;
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
            } else {
                // There is a selection, delete the selected text
                inputField.value = value.slice(0, start) + value.slice(end);
                inputField.selectionStart = inputField.selectionEnd = start;
            }
        } else if (target.id === 'enterKey') {
            if (!value) return;
            this.handleConfirmDate(value);
        } else {
            const keyValue = target.innerText.trim();
            inputField.value = value.slice(0, start) + keyValue + value.slice(end);
            inputField.selectionStart = inputField.selectionEnd = start + keyValue.length;
        }

        inputField.focus();
    }

    handleFinish() {
        if (this.success) {
            const timeArray = this.inputValue.match(/.{1,2}/g);
            if (timeArray) {
                const yy = timeArray.pop();
                this.currentDate = timeArray.join('/') + yy;
            }
        }
        this.step = 1;
    }
}
