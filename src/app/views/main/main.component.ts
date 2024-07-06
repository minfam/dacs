import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
})
export class MainComponent {
    indicators = [
        {
            name: 'Bedok Interchange Boarding Berth 3 to 10',
            time: '10:00',
            left: 'DESTINATION',
            color: '#01161a',
        },
        {
            name: '57059 - Opp Sembawang Air Base',
            time: '09:39',
            left: 'NOW',
            color: '#046a7b',
        },
        {
            name: '48149 - Mandai Crematorium &  Columbarium',
            time: '09:45',
            left: 'NEXT',
            right: true,
            color: '#4a5964',
        },
        {
            name: '48059 - Opp Mandai Agrotech Pk',
            time: '09:52',
            color: '#2a3943',
        },
    ];
}
