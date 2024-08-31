import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'maintenance-print-bcv-result',
    imports: [CommonModule, MatIconModule, RouterModule, ReactiveFormsModule],
    templateUrl: './print-bcv-result.component.html',
    styleUrls: ['./print-bcv-result.component.scss'],
})
export class PrintBcvResultComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
