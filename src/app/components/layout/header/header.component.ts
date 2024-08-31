import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
    standalone: true,
    selector: 'app-header',
    imports: [CommonModule, MatIconModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [DatePipe],
})
export class HeaderComponent implements OnInit {
    currentDate = new Date();
    intervalId;
    displayEndTrip: boolean = true;

    constructor(public datepipe: DatePipe) {}

    ngOnInit() {
        this.intervalId = setInterval(() => {
            this.currentDate = new Date();
        }, 1000);
    }

    ngOnDestroy() {
        clearInterval(this.intervalId);
    }
}
