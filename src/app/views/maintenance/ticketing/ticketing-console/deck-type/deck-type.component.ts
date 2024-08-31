import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';

@Component({
    standalone: true,
    selector: 'ticketing-console-deck-type',
    imports: [CommonModule, MatIconModule, RouterModule, ReactiveFormsModule, ConfirmDialogComponent],
    templateUrl: './deck-type.component.html',
    styleUrls: ['./deck-type.component.scss'],
})
export class TicketingConsoleDeckTypeComponent implements OnInit {
    step: number;
    deckType: string = '';

    constructor(private router: Router) {
        this.step = 1;
    }

    ngOnInit() {}

    goBack() {
        this.router.navigate(['/maintenance/ticketing/ticketing-console']);
    }

    // handleSelect() {
    //     this.step = 2;
    // }

    handleCloseDeckType() {
        this.step = 1;
        this.deckType = '';
    }

    handleChangeDeckType(deckType: string) {
        this.deckType = deckType;
        this.step = 2;
    }

    handleConfirmDeckType() {
        this.step = 2;
    }

    handleFinish() {
        console.log('Finish');
        this.step = 1;
        this.goBack();
    }
}
