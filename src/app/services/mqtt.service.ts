import { Injectable } from '@angular/core';
import mqtt from 'mqtt';
import { BehaviorSubject } from 'rxjs';

export const Topics = {
    main: '/mqdt/main-page',
    up: '/TS/TripMgr/MADTButtonArrowUp',
    down: '/TS/TripMgr/MADTButtonArrowDown',
};

@Injectable({
    providedIn: 'root',
})
export class MqttService {
    private client: mqtt.MqttClient | null = null;
    private isConnecting = false;
    public static readonly LOCAL_STORAGE_KEY = 'mqttBrokerUrl';
    // private readonly fallbackBrokerUrl = 'ws://broker.hivemq.com:8000/mqtt';

    // Observable for connection status
    private connectionStatusSubject = new BehaviorSubject<boolean | null>(null); // null = not started, false = trying to connect, true = connected
    connectionStatus$ = this.connectionStatusSubject.asObservable();

    constructor() {}

    connect() {
        const brokerUrl = localStorage.getItem(MqttService.LOCAL_STORAGE_KEY);

        if (!brokerUrl) {
            console.error('No broker URL found in localStorage.');
            return;
        }

        if (this.isConnecting) {
            console.log('Already connecting to a broker.');
            return;
        }

        this.isConnecting = true;
        this.connectionStatusSubject.next(false);
        if (this.client) {
            this.client.end(() => {
                console.log('Disconnected from previous broker');
                this.client = null;
                this.initializeClient(JSON.parse(brokerUrl));
            });
        } else {
            this.initializeClient(JSON.parse(brokerUrl));
        }
    }
    disconnect() {
        if (this.client) {
            this.client.end(() => {
                console.log('Disconnected from broker');
            });
        }
    }
    initializeClient(brokerUrl: string) {
        const storedBrokerUrl = localStorage.getItem(MqttService.LOCAL_STORAGE_KEY);
        if (!storedBrokerUrl) {
            localStorage.setItem(MqttService.LOCAL_STORAGE_KEY, JSON.stringify(brokerUrl));
            console.log('Broker URL saved to localStorage:', brokerUrl);
        }
        try {
            this.client = mqtt.connect(brokerUrl);
            this.client.on('connect', () => {
                console.log('Connected to MQTT broker at:', brokerUrl);
                this.isConnecting = false;
                this.connectionStatusSubject.next(true); // Notify that the connection is established
            });

            this.client.on('error', (error) => {
                console.error('MQTT Error:', error);
                this.isConnecting = false;
                this.connectionStatusSubject.next(false); // Notify that the connection failed
            });
        } catch (e: any) {
            console.log('error', e?.message);
        }
    }

    publish(topic: string, message: string) {
        if (this.client) {
            this.client.publish(topic, message);
        } else {
            console.error('Client is not connected.');
        }
    }

    subscribe(topic: string, callback: (message: string, topic?: string) => void) {
        if (this.client) {
            this.client.subscribe(topic, (err) => {
                if (err) {
                    console.error('Subscription error:', err);
                }
            });

            this.client.on('message', (currentTopic, message) => {
                if (currentTopic === topic) {
                    callback(message.toString(), currentTopic);
                }
            });
        } else {
            console.error('Client is not connected.');
        }
    }
}
