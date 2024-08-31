import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'toggle-rear-door',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
    templateUrl: './toggle-rear-door.component.html',
    styleUrls: ['./toggle-rear-door.component.scss'],
})
export class ToggleRearDoorComponent {
    exitMode: string = '';

    constructor(
        private router: Router,
        private activeRouter: ActivatedRoute,
    ) {}

    // ngOnInit(): void {
    //     const isNewAccess = this.activeRouter.snapshot.params['new'];
    // }

    setExitMode(mode: string): void {
        this.exitMode = mode;
    }

    backToMain(): void {
        this.router.navigate(['/main']);
    }

    goBack(): void {
        this.exitMode = '';
    }

    handleUpdateCV(): void {
        this.router.navigate(['/main']);
    }
}
