import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';

@Component({
    standalone: true,
    selector: 'ticketing-console-bls',
    imports: [CommonModule, MatIconModule, RouterModule, ReactiveFormsModule, ConfirmDialogComponent],
    templateUrl: './bls.component.html',
    styleUrls: ['./bls.component.scss'],
})
export class TicketingConsoleBLSComponent implements OnInit {
    step: number;
    enabled: boolean = true;

    constructor(private router: Router) {
        this.step = 1;
    }

    ngOnInit() {}

    goBack() {
        this.router.navigate(['/maintenance/ticketing/ticketing-console']);
    }

    handleSelectStatus(isEnabled: boolean) {
        this.enabled = isEnabled;
        this.step = 2;
    }

    handleUpdateStatus(isConfirm: boolean) {
        if (isConfirm) {
            this.step = 3;
        } else {
            this.enabled = !this.enabled;
            this.step = 1;
        }
    }

    handleFinish() {
        this.step = 1;
    }
}
