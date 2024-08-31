import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router } from '@angular/router';

@Component({
    standalone: true,
    selector: 'maintenance-calibrate-bls',
    imports: [CommonModule, MatIconModule, RouterModule, ReactiveFormsModule],
    templateUrl: './calibrate-bls.component.html',
    styleUrls: ['./calibrate-bls.component.scss'],
})
export class CalibrateBLSComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    handleNavigate(url: string): void {
        this.router.navigate([url]);
    }
}
