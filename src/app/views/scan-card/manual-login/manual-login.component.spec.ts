/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ManualLoginComponent } from './manual-login.component';

describe('ManualLoginComponent', () => {
    let component: ManualLoginComponent;
    let fixture: ComponentFixture<ManualLoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ManualLoginComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ManualLoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
