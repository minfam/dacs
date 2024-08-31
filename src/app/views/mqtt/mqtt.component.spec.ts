import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MqttComponent } from './mqtt.component';
import { MqttService, Topics } from '@services/mqtt.service';
import { By } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

describe('MqttComponent', () => {
    let component: MqttComponent;
    let fixture: ComponentFixture<MqttComponent>;
    let mqttServiceSpy: jasmine.SpyObj<MqttService>;

    beforeEach(async () => {
        const spy = jasmine.createSpyObj('MqttService', ['publish']);

        await TestBed.configureTestingModule({
            imports: [MqttComponent, MatButtonModule],
            providers: [{ provide: MqttService, useValue: spy }],
        }).compileComponents();

        mqttServiceSpy = TestBed.inject(MqttService) as jasmine.SpyObj<MqttService>;
        fixture = TestBed.createComponent(MqttComponent);
        component = fixture.componentInstance;

        // Ensure Angular completes all asynchronous tasks
        await fixture.whenStable();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call publishTopic with "toggle-rear-door" when the first button is clicked', () => {
        const button = fixture.debugElement.query(By.css('button:nth-of-type(1)'));
        expect(button).toBeTruthy();
        button.triggerEventHandler('click', null);
        expect(mqttServiceSpy.publish).toHaveBeenCalledWith(Topics?.main, 'toggle-rear-door');
    });

    it('should call publishTopic with "main" when the second button is clicked', () => {
        const button = fixture.debugElement.query(By.css('button:nth-of-type(2)'));
        expect(button).toBeTruthy();
        button.triggerEventHandler('click', null);
        expect(mqttServiceSpy.publish).toHaveBeenCalledWith(Topics?.main, 'main');
    });

    it('should call publishTopic with "ticketing" when the third button is clicked', () => {
        const button = fixture.debugElement.query(By.css('button:nth-of-type(3)'));
        expect(button).toBeTruthy();
        button.triggerEventHandler('click', null);
        expect(mqttServiceSpy.publish).toHaveBeenCalledWith(Topics?.main, 'ticketing');
    });

    it('should call publishTopic with "maintenance" when the fourth button is clicked', () => {
        const button = fixture.debugElement.query(By.css('button:nth-of-type(4)'));
        expect(button).toBeTruthy();
        button.triggerEventHandler('click', null);
        expect(mqttServiceSpy.publish).toHaveBeenCalledWith(Topics?.main, 'maintenance');
    });
});
