import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    standalone: true,
    selector: 'app-dashboard',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        console.log('This Works!');
    }
}
