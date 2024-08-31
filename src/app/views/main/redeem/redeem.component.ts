import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { Router, RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';

@Component({
    standalone: true,
    selector: 'redeem',
    imports: [CommonModule, ReactiveFormsModule, MatIconModule, RouterModule, ConfirmDialogComponent],
    templateUrl: './redeem.component.html',
    styleUrls: ['./redeem.component.scss'],
})
export class RedeemComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    handleRedeem(isConfirm: boolean) {
        if (isConfirm) {
            this.router.navigate(['/main']);
        } else {
            this.router.navigate(['/main']);
        }
    }
}
