import { Component, OnInit } from '@angular/core';
import { MqttService, Topics } from '@services/mqtt.service';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms'; // Import FormsModule to use ngModel

@Component({
    selector: 'app-mqtt',
    standalone: true,
    imports: [MatButtonModule, FormsModule],
    templateUrl: './mqtt.component.html',
    styleUrls: ['./mqtt.component.scss'],
})
export class MqttComponent implements OnInit {
    brokerUrl: any = {
        host: 'broker.hivemq.com',
        protocol: 'ws',
        port: '8000',
        path: '/mqtt',
    }; //'ws://broker.hivemq.com:8000/mqtt'; // Property to bind the input field
    isConnected: boolean | null = null;
    isLoading: boolean | null = true;
    topics = Topics;
    constructor(private mqttService: MqttService) {}

    ngOnInit() {
        const url = localStorage.getItem(MqttService.LOCAL_STORAGE_KEY);
        if (url) {
            this.mqttService.initializeClient(url);
        }
        this.mqttService.connectionStatus$.subscribe((status) => {
            this.isConnected = status;
            if (status === true) {
                console.log('Successfully connected to the broker.');
            } else if (status === false) {
                console.log('Still trying to connect...');
            }
            this.isLoading = false;
        });
    }

    connectToBroker() {
        this.isLoading = true;
        if (this.brokerUrl) {
            this.mqttService.initializeClient(this.brokerUrl);
        }
    }

    publishTopic(message: string, topic?: string) {
        this.mqttService.publish(topic || Topics?.main, message);
    }
    disconnect() {
        localStorage.setItem(MqttService?.LOCAL_STORAGE_KEY, '');
        this.mqttService.disconnect();
        this.isConnected = false;
    }
}
