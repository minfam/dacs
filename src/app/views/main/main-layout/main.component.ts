import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app.state';
import { MqttService, Topics } from '@services/mqtt.service';
import { activeCVs, freeCVs, updateActiveCVs, updateLineActive } from '@app/store/main/main.reducer';

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatInputModule, MatButtonModule, ReactiveFormsModule, RouterOutlet],
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    providers: [DatePipe],
})
export class MainComponent implements OnInit {
    currentDate = new Date();
    intervalId;
    activeCVs$: Observable<number[]>;
    freeCVs$: Observable<number[]>;
    cvsActive: number[] = [];
    cvsFree: number[] = [];

    constructor(
        public datepipe: DatePipe,
        private router: Router,
        private store: Store<AppState>,
        private mqttService: MqttService,
    ) {
        this.activeCVs$ = this.store.select(activeCVs);
        this.freeCVs$ = this.store.select(freeCVs);
    }

    ngOnInit() {
        // Using Basic Interval
        this.intervalId = setInterval(() => {
            this.currentDate = new Date();
        }, 1000);

        this.activeCVs$?.subscribe((data) => {
            if (data.length > 0) {
                this.cvsActive = data;
                setTimeout(() => {
                    this.store.dispatch(updateActiveCVs({ payload: [] }));
                    this.cvsActive = [];
                }, 3000);
            }
        });
        this.freeCVs$?.subscribe({
            next: (data: number[]) => {
                this.cvsFree = data;
            },
        });
        this.mqttService.subscribe(Topics?.up, (message, currentTopic) => {
            console.log(Topics?.up, message, currentTopic);
            this.updateLineActive(-1);
        });
        this.mqttService.subscribe(Topics?.down, (message, currentTopic) => {
            console.log(Topics?.up, message, currentTopic);
            this.updateLineActive(1);
        });
    }

    navigate(route: string): void {
        this.router.navigate([route]);
    }

    isRouteActive(route: string): boolean {
        return this.router.url === route;
    }

    updateLineActive(idx: number): void {
        this.store.dispatch(updateLineActive({ payload: idx }));
    }

    ngOnDestroy() {
        clearInterval(this.intervalId);
    }
}
