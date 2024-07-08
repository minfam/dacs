import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    standalone: true,
    selector: 'app-ticketing',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './ticketing.component.html',
    styleUrls: ['./ticketing.component.scss'],
})
export class TicketingComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        console.log('This Works!');
    }
}
