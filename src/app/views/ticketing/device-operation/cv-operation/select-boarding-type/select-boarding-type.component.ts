import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';
import { CustomSwitchComponent } from '@components/custom-switch/custom-switch.component';

@Component({
    standalone: true,
    selector: 'select-boarding-type',
    imports: [
        CommonModule,
        MatIconModule,
        RouterModule,
        ReactiveFormsModule,
        ConfirmDialogComponent,
        CustomSwitchComponent,
    ],
    templateUrl: './select-boarding-type.component.html',
    styleUrls: ['./select-boarding-type.component.scss'],
})
export class SelectBoardingTypeComponent implements OnInit {
    boardingType = {
        allAuto: false,
        allExit: false,
        allNormal: false,
    };
    selectedBoardingType: string = '';
    step: number;

    constructor(private router: Router) {
        this.step = 1;
    }
    ngOnInit() {}

    goBack() {
        this.router.navigate(['/ticketing/device-operation/cv']);
    }

    handleToggleStatus(boardingType: string) {
        this.boardingType[boardingType] = !this.boardingType[boardingType];

        if (this.boardingType[boardingType]) {
            this.selectedBoardingType = boardingType;
            this.step = 2;
        }
    }

    handleSetStatus(isConfirm: boolean) {
        if (isConfirm) {
            this.step = 3;
        } else {
            this.boardingType[this.selectedBoardingType] = false;
            this.selectedBoardingType = '';
            this.step = 1;
        }
    }

    handleFinish() {
        this.step = 1;
    }
}
