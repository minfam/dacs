import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';

@Component({
    standalone: true,
    selector: 'show-cv-status',
    imports: [CommonModule, MatIconModule, RouterModule, ReactiveFormsModule, ConfirmDialogComponent],
    templateUrl: './show-cv-status.component.html',
    styleUrls: ['./show-cv-status.component.scss'],
})
export class ShowCVStatusComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    handleClose() {
        this.router.navigate(['/ticketing/device-operation/cv']);
    }
}
