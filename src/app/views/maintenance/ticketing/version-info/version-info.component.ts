import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NgScrollbarModule, NgScrollbar } from 'ngx-scrollbar';

@Component({
    standalone: true,
    selector: 'maintenance-version-info',
    imports: [CommonModule, MatIconModule, RouterModule, NgScrollbarModule, ReactiveFormsModule],
    templateUrl: './version-info.component.html',
    styleUrls: ['./version-info.component.scss'],
})
export class VersionInfoComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
