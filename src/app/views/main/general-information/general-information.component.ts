import { CommonModule, DatePipe } from '@angular/common';
import { Component, ViewChild, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { lineActive, busStopList, selectBusStop, busStopFareId } from '@app/store/main/main.reducer';
import { AppState } from '@store/app.state';
import { Observable, Subject } from 'rxjs';
import { IBusStop } from '@models';
import { takeUntil } from 'rxjs/operators';
import { NgScrollbarModule, NgScrollbar } from 'ngx-scrollbar';

@Component({
    selector: 'general-information',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatInputModule, MatButtonModule, ReactiveFormsModule, NgScrollbarModule],
    templateUrl: './general-information.component.html',
    styleUrls: ['./general-information.component.scss'],
    providers: [DatePipe],
})
export class GeneralInformationComponent implements OnInit {
    private destroyLineActive$ = new Subject<void>();
    private destroyBusStopList$ = new Subject<void>();

    lineActive$: Observable<number>;
    busStopList$: Observable<IBusStop[]>;
    busStopFareId$: Observable<string>;
    ticketingBusStop: IBusStop | null = null;
    destination: IBusStop;

    @ViewChild(NgScrollbar) scrollable?: NgScrollbar;

    constructor(
        private router: Router,
        private store: Store<AppState>,
    ) {
        this.lineActive$ = this.store.select(lineActive);
        this.busStopList$ = this.store.select(busStopList);
        this.busStopFareId$ = this.store.select(busStopFareId);
        this.destination = {
            id: '48059',
            name: 'Bedok Interchange Boarding Berth 3 to 10',
            time: '09:52',
            color: '#071e24',
            textStyle: 'lighter',
        };
    }

    ngOnInit(): void {}

    selectBusStop(busStop: IBusStop): void {
        this.router.navigate([`/main/bus-stop-fare/${busStop.id}`]);
        this.store.dispatch(selectBusStop({ payload: busStop }));
    }

    ngAfterViewInit() {
        this.lineActive$.pipe(takeUntil(this.destroyLineActive$)).subscribe((_l) => {
            this.busStopList$.pipe(takeUntil(this.destroyBusStopList$)).subscribe((_b) => {
                // const currentBusStopId = _b[_l].id;
                // const prevBusStopId = _b[_l - 1]?.id;
                // if (_l === 1) {
                //     this?.scrollable?.scrollTo({ top: 0 });
                // } else {
                //     const scrollToId = _l === 0 ? currentBusStopId : prevBusStopId;
                //     document?.getElementById(scrollToId)?.scrollIntoView({
                //         behavior: 'smooth',
                //         block: 'start',
                //         inline: 'nearest',
                //     });
                // }
                this.ticketingBusStop = _b[_l];
            });
        });
    }

    ngOnDestroy() {
        this.destroyLineActive$.next();
        this.destroyLineActive$.complete();
        this.destroyBusStopList$.next();
        this.destroyBusStopList$.complete();
    }
}
