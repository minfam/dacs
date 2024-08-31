import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'maintenance-redetect-bls',
    imports: [CommonModule, MatIconModule, RouterModule, ReactiveFormsModule],
    templateUrl: './redetect-bls.component.html',
    styleUrls: ['./redetect-bls.component.scss'],
})
export class RedetectBLSComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
