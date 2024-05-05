import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Login } from '../../models/user';
@Component({
    selector: 'app-sign-in',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
    loader: boolean = false;
    form!: FormGroup;
    error: string = '';
    constructor(
        // private userService: UserService,
        private fb: FormBuilder,
        private router: Router,
    ) {}

    ngOnInit() {
        this.form = this.fb.group(new Login());
        // const sampleData = this.userService.get(0).subscribe({
        //   next: (value: User[]) => {
        //     console.log(value);
        //   },
        //   error: e => {
        //     console.error(e);
        //     this.loader = false;
        //   },
        //   complete: () => {
        //     console.log(sampleData);
        //     this.loader = false;
        //   },
        // });
    }

    submit() {
        this.router.navigate(['/dashboard']);
        console.log(this.form.getRawValue());
    }
}
