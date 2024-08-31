import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButton } from '@angular/material/button';

type Layout = 'numeric' | 'full';
@Component({
    selector: 'custom-keyboard',
    templateUrl: './custom-keyboard.component.html',
    styleUrls: ['./custom-keyboard.component.scss'],
    standalone: true,
    imports: [NgIf, MatButton],
})
export class CustomKeyboardComponent {
    @Input() layout?: Layout;
    @Output() onKeyPress: EventEmitter<Event> = new EventEmitter<Event>();

    constructor() {}

    handleChangeInput(event: Event): void {
        this.onKeyPress.emit(event);
    }
}
