import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet, Router } from '@angular/router';
import { MqttService, Topics } from '@services/mqtt.service';
import { routerUrls } from '@app/app.routes';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [NavbarComponent, HeaderComponent, RouterOutlet],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
})
export class LayoutComponent {
    constructor(
        private mqttService: MqttService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.mqttService.connect();
        this.mqttService.subscribe(Topics?.main, (message) => {
            if (message === 'toggle-rear-door') {
                this.router?.navigate(['/main/toggle-rear-door']);
            }
            if (message === 'main') {
                this.router?.navigate([routerUrls?.private?.main?.url]);
            }
            if (message === 'ticketing') {
                this.router?.navigate([routerUrls?.private?.ticketing?.url]);
            }
            if (message === 'maintenance') {
                this.router?.navigate([routerUrls?.private?.maintenance?.url]);
            }
        });
    }
}
