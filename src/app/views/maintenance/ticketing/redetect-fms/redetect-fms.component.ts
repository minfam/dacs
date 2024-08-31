import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'maintenance-redetect-fms',
    imports: [CommonModule, MatIconModule, RouterModule, ReactiveFormsModule],
    templateUrl: './redetect-fms.component.html',
    styleUrls: ['./redetect-fms.component.scss'],
})
export class RedetectFMSComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
