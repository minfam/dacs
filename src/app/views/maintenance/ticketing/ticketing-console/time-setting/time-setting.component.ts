import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';
import { CustomKeyboardComponent } from '@components/custom-keyboard/custom-keyboard.component';

@Component({
    standalone: true,
    selector: 'ticketing-console-time-setting',
    imports: [
        CommonModule,
        MatIconModule,
        RouterModule,
        ReactiveFormsModule,
        ConfirmDialogComponent,
        CustomKeyboardComponent,
    ],
    templateUrl: './time-setting.component.html',
    styleUrls: ['./time-setting.component.scss'],
})
export class TicketingConsoleTimeSettingComponent implements OnInit {
    step: number;
    currentTime: string;
    inputValue: string;
    success: boolean = true;

    constructor(private router: Router) {
        this.currentTime = '09:54:16';
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

    private handleConfirmTime(value: string) {
        this.inputValue = value;
        this.step = 3;
        if (isNaN(Number(value)) || value.length !== 6) {
            this.success = false;
        }

        const timeArray = this.inputValue.match(/.{1,2}/g);
        if (Number(timeArray?.[0] || 0) > 24 || Number(timeArray?.[1] || 0) > 59 || Number(timeArray?.[2] || 0) > 59) {
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
            this.handleConfirmTime(value);
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
                this.currentTime = timeArray.join(':');
            }
        }
        this.step = 1;
    }
}
