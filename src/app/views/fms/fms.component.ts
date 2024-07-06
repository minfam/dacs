import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../../layout';

@Component({
    standalone: true,
    selector: 'app-fms',
    imports: [CommonModule, ReactiveFormsModule, NavbarComponent],
    templateUrl: './fms.component.html',
    styleUrls: ['./fms.component.scss'],
})
export class FMSComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        console.log('This Works!');
    }
}
