import { CommonModule, DatePipe } from '@angular/common';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    providers: [DatePipe],
})
export class MainComponent implements OnInit, OnDestroy {
    currentDate: Date = new Date();
    private timer: any;
    constructor(private ngZone: NgZone) {}

    ngOnInit(): void {
        this.ngZone.runOutsideAngular(() => {
            this.timer = setInterval(() => {
                this.ngZone.run(() => {
                    this.currentDate = new Date();
                });
            }, 1000);
        });
    }

    ngOnDestroy(): void {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    indicators = [
        {
            name: 'Bedok Interchange Boarding Berth 3 to 10',
            time: '10:00',
            left: 'DESTINATION',
            badgeColor: '#05161b',
            color: '#15313b',
        },
        {
            name: '57059 - Opp Sembawang Air Base',
            time: '09:39',
            left: 'NOW',
            badgeColor: '#013c5c',
            color: '#046a7b',
        },
        {
            name: '48149 - Mandai Crematorium &  Columbarium',
            time: '09:45',
            left: 'NEXT',
            right: true,
            badgeColor: '#828282',
            color: '#071e24',
            textStyle: 'lighter',
        },
        {
            name: '48059 - Opp Mandai Agrotech Pk',
            time: '09:52',
            color: '#071e24',
            textStyle: 'lighter',
        },
    ];
}
