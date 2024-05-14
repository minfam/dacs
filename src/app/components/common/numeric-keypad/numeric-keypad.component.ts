import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-numeric-keypad',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './numeric-keypad.component.html',
    styleUrl: './numeric-keypad.component.scss',
})
export class NumericKeypadComponent {
    @Output() numberClick = new EventEmitter<string>();
    @Output() delete = new EventEmitter<void>();
    @Output() confirm = new EventEmitter<void>();

    numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    constructor(private router: Router) {}

    onNumberClick(number: string) {
        this.numberClick.emit(number);
    }

    onDelete() {
        this.delete.emit();
    }

    onConfirm() {
        this.confirm.emit();
        this.router.navigate(['/scan-card/logged']);
    }
}
