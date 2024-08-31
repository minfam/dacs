import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';
import { CustomSwitchComponent } from '@components/custom-switch/custom-switch.component';

@Component({
    standalone: true,
    selector: 'cv-power-control',
    imports: [
        CommonModule,
        MatIconModule,
        RouterModule,
        ReactiveFormsModule,
        ConfirmDialogComponent,
        CustomSwitchComponent,
    ],
    templateUrl: './cv-power-control.component.html',
    styleUrls: ['./cv-power-control.component.scss'],
})
export class CVPowerControlComponent implements OnInit {
    step: number;
    controlStatus = {
        bev1: false,
        bev2: false,
        bxv1: false,
        bxv2: false,
        bxv3: false,
        bxv4: false,
    };
    selectedMode: string = '';

    constructor(private router: Router) {
        this.step = 1;
    }

    ngOnInit() {}

    goBack() {
        this.router.navigate(['/ticketing/device-operation/cv']);
    }

    handleChangeStatus(mode: string) {
        this.controlStatus[mode] = !this.controlStatus[mode];

        if (this.controlStatus[mode]) {
            this.step = 2;
            this.selectedMode = mode;
        }
    }

    handleFinish() {
        this.step = 3;
    }

    handleClose() {
        this.step = 1;
    }
}
