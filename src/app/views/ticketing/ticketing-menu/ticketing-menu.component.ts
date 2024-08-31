import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';

@Component({
    standalone: true,
    selector: 'app-ticketing-menu',
    imports: [CommonModule, ReactiveFormsModule, ConfirmDialogComponent],
    templateUrl: './ticketing-menu.component.html',
    styleUrls: ['./ticketing-menu.component.scss'],
})
export class TicketingMenuComponent implements OnInit {
    displayTransactionPopUp: boolean = false;
    buttons = [
        {
            title: 'Top Up',
            icon: '/assets/images/icons/ticketing/top-up.svg',
            url: '/ticketing/top-up',
        },
        {
            title: 'Transaction',
            icon: '/assets/images/icons/ticketing/transaction.svg',
            url: '/ticketing/transaction',
        },
        {
            title: 'Concession CV1',
            icon: '/assets/images/icons/ticketing/concession1.svg',
            url: '/ticketing/concession-cv1',
        },
        {
            title: 'Concession CV2',
            icon: '/assets/images/icons/ticketing/concession2.svg',
            url: '/ticketing/concession-cv2',
        },
        {
            title: 'Cancel Ride CV1',
            icon: '/assets/images/icons/ticketing/cancel1.svg',
            url: '/ticketing/cancel-ride-cv1',
        },
        {
            title: 'Cancel Ride CV2',
            icon: '/assets/images/icons/ticketing/cancel2.svg',
            url: '/ticketing/cancel-ride-cv2',
        },
        {
            title: 'Redeem Complimentary',
            icon: '/assets/images/icons/ticketing/redeem.svg',
            url: '/ticketing/redeem-complimentary',
        },
        {
            title: 'Print Cash Fare',
            icon: '/assets/images/icons/ticketing/print.svg',
            url: '/ticketing/print-cash-fare',
        },
        {
            title: 'Device Operations',
            icon: '/assets/images/icons/ticketing/device.svg',
            url: '/ticketing/device-operation',
        },
    ];

    constructor(private router: Router) {
        this.displayTransactionPopUp = false;
    }

    ngOnInit() {
        console.log('Ticketing Works!');
    }

    handleNavigate(url: string): void {
        if (url === '/ticketing/transaction') {
            this.displayTransactionPopUp = true;
        } else {
            this.router.navigate([url]);
        }
    }

    handleTransactionPopUp(isConfirm: boolean): void {
        if (isConfirm) {
            this.router.navigate(['/ticketing/transaction']);
        }
        this.displayTransactionPopUp = false;
    }
}
