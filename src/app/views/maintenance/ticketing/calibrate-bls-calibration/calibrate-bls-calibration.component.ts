import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router } from '@angular/router';
import { CustomKeyboardComponent } from '@components/custom-keyboard/custom-keyboard.component';

@Component({
    standalone: true,
    selector: 'maintenance-calibrate-bls-calibration',
    imports: [CommonModule, MatIconModule, RouterModule, ReactiveFormsModule, CustomKeyboardComponent],
    templateUrl: './calibrate-bls-calibration.component.html',
    styleUrls: ['./calibrate-bls-calibration.component.scss'],
})
export class CalibrateBLSCalibrationComponent implements OnInit {
    inputValue: string;
    step: number;

    constructor(private router: Router) {
        this.inputValue = '';
        this.step = 1;
    }

    ngOnInit() {}

    handleSelect(step: number): void {
        this.step = step;
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
            this.inputValue = value;
            this.step = 5;
        } else {
            const keyValue = target.innerText.trim();
            inputField.value = value.slice(0, start) + keyValue + value.slice(end);
            inputField.selectionStart = inputField.selectionEnd = start + keyValue.length;
        }

        inputField.focus();
    }

    handleFinish() {
        this.step = 1;
        this.inputValue = '';
        this.router.navigate(['/maintenance/ticketing/calibrate-bls']);
    }
}
