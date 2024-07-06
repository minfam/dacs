/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FMSComponent } from './fms.component';

describe('FMSComponent', () => {
    let component: FMSComponent;
    let fixture: ComponentFixture<FMSComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FMSComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FMSComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
