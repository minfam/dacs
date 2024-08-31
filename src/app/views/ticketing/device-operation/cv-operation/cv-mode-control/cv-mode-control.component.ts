import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';
import { CustomSwitchComponent } from '@components/custom-switch/custom-switch.component';

@Component({
    standalone: true,
    selector: 'cv-mode-control',
    imports: [
        CommonModule,
        MatIconModule,
        RouterModule,
        NgIf,
        ReactiveFormsModule,
        ConfirmDialogComponent,
        CustomSwitchComponent,
    ],
    templateUrl: './cv-mode-control.component.html',
    styleUrls: ['./cv-mode-control.component.scss'],
})
export class CVModeControlComponent implements OnInit {
    controlMode = {
        alwaysInService: false,
        normalService: false,
    };
    selectedControlMode: string = '';
    step: number;

    constructor(private router: Router) {
        this.step = 1;
    }
    ngOnInit() {}

    goBack() {
        this.router.navigate(['/ticketing/device-operation/cv']);
    }

    handleToggleStatus(controlMode: string) {
        this.controlMode[controlMode] = !this.controlMode[controlMode];

        if (this.controlMode[controlMode]) {
            this.selectedControlMode = controlMode;
            this.step = 2;
        }
    }

    handleSetStatus(isConfirm: boolean) {
        console.log('isConfirm', this.selectedControlMode);
        if (isConfirm) {
            this.step = 3;
        } else {
            this.controlMode[this.selectedControlMode] = false;
            this.selectedControlMode = '';
            this.step = 1;
        }
    }

    handleFinish() {
        this.step = 1;
    }
}
