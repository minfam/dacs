import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NgScrollbarModule, NgScrollbar } from 'ngx-scrollbar';

@Component({
    standalone: true,
    selector: 'maintenance-bls-information',
    imports: [CommonModule, MatIconModule, RouterModule, NgScrollbarModule, ReactiveFormsModule],
    templateUrl: './bls-information.component.html',
    styleUrls: ['./bls-information.component.scss'],
})
export class BLSInformationComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
