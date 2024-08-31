import { Routes } from '@angular/router';
import { WelcomeComponent } from '@views/welcome/welcome.component';

import { LayoutComponent } from '@components/layout/layout.component';
import { AuthGuard } from './guards/auth.guard';
import { FMSComponent } from '@views/fms/fms.component';
import { SignInComponent } from '@views/sign-in/sign-in.component';

//Main
import { MainComponent } from '@views/main/main-layout/main.component';
import { GeneralInformationComponent } from '@views/main/general-information/general-information.component';
import { FrontExitComponent } from '@views/main/front-exit/front-exit.component';
import { CashPaymentComponent } from '@views/main/cash-payment/cash-payment.component';
import { ToggleRearDoorComponent } from '@views/main/toggle-rear-door/toggle-rear-door.component';
import { BusStopFareComponent } from '@views/main/bus-stop-fare/bus-stop-fare.component';
import { FreeComponent } from '@views/main/free/free.component';
import { RedeemComponent } from '@views/main/redeem/redeem.component';
import { BreakdownComponent } from '@views/main/breakdown/breakdown.component';

//Maintenance
import { MaintenanceMenuComponent } from '@views/maintenance/maintenance-menu/maintenance-menu.component';
import { MaintenanceTicketingComponent } from '@views/maintenance/ticketing/maintenance-ticketing-layout/maintenance-ticketing.component';
import { BLSInformationComponent } from '@views/maintenance/ticketing/bls-information/bls-information.component';
import { CalibrateBLSComponent } from '@views/maintenance/ticketing/calibrate-bls/calibrate-bls.component';
import { CalibrateBLSManualInputComponent } from '@views/maintenance/ticketing/calibrate-bls-manual-input/calibrate-bls-manual-input.component';
import { CalibrateBLSCalibrationComponent } from '@views/maintenance/ticketing/calibrate-bls-calibration/calibrate-bls-calibration.component';
import { ChangeWlanKeyComponent } from '@views/maintenance/ticketing/change-wlan-key/change-wlan-key.component';
import { CheckPrinterComponent } from '@views/maintenance/ticketing/check-printer/check-printer.component';
import { DisplayAuditComponent } from '@views/maintenance/ticketing/display-audit/display-audit.component';
import { GyroSwitchComponent } from '@views/maintenance/ticketing/gyro-switch/gyro-switch.component';
import { LoadParameterComponent } from '@views/maintenance/ticketing/load-parameter/load-parameter.component';
import { PrintBcvResultComponent } from '@views/maintenance/ticketing/print-bcv-result/print-bcv-result.component';
import { RedetectBLSComponent } from '@views/maintenance/ticketing/redetect-bls/redetect-bls.component';
import { RedetectCRPComponent } from '@views/maintenance/ticketing/redetect-crp/redetect-crp.component';
import { RedetectCVComponent } from '@views/maintenance/ticketing/redetect-cv/redetect-cv.component';
import { RedetectFMSComponent } from '@views/maintenance/ticketing/redetect-fms/redetect-fms.component';
import { ResetBLSComponent } from '@views/maintenance/ticketing/reset-bls/reset-bls.component';
import { SaveTransactionComponent } from '@views/maintenance/ticketing/save-transaction/save-transaction.component';
import { TestPrintComponent } from '@views/maintenance/ticketing/test-print/test-print.component';
import { VersionInfoComponent } from '@views/maintenance/ticketing/version-info/version-info.component';
import { TicketingConsoleTableComponent } from '@views/maintenance/ticketing/ticketing-console/ticketing-console-table/ticketing-console-table.component';
import { TicketingConsoleDeckTypeComponent } from '@views/maintenance/ticketing/ticketing-console/deck-type/deck-type.component';
import { TicketingConsoleBLSComponent } from '@views/maintenance/ticketing/ticketing-console/bls/bls.component';
import { TicketingConsoleTimeSettingComponent } from '@views/maintenance/ticketing/ticketing-console/time-setting/time-setting.component';
import { TicketingConsoleDateSettingComponent } from '@views/maintenance/ticketing/ticketing-console/date-setting/date-setting.component';
import { TicketingConsoleComplimentaryDayComponent } from '@views/maintenance/ticketing/ticketing-console/complimentary-day/complimentary-day.component';
import { TicketingConsoleDeleteParameterComponent } from '@views/maintenance/ticketing/ticketing-console/delete-parameter/delete-parameter.component';

//Ticketing
import { TicketingMenuComponent } from '@views/ticketing/ticketing-menu/ticketing-menu.component';
import { DeviceOperationLayoutComponent } from '@views/ticketing/device-operation/device-operation-layout/device-operation-layout.component';
import { TopUpComponent } from '@views/ticketing/top-up/top-up.component';
import { CancelRideCV1Component } from '@views/ticketing/cancel-ride-cv1/cancel-ride-cv1.component';
import { CancelRideCV2Component } from '@views/ticketing/cancel-ride-cv2/cancel-ride-cv2.component';
import { ConcessionCV1Component } from '@views/ticketing/concession-cv1/concession-cv1.component';
import { ConcessionCV2Component } from '@views/ticketing/concession-cv2/concession-cv2.component';

//CV Operation
import { CVOperationMenuComponent } from '@views/ticketing/device-operation/cv-operation/cv-operation-menu/cv-operation-menu.component';
import { ShowCVStatusComponent } from '@views/ticketing/device-operation/cv-operation/show-cv-status/show-cv-status.component';
import { SelectBoardingTypeComponent } from '@views/ticketing/device-operation/cv-operation/select-boarding-type/select-boarding-type.component';
import { CVModeControlComponent } from '@views/ticketing/device-operation/cv-operation/cv-mode-control/cv-mode-control.component';
import { PowerAllCVOnComponent } from '@views/ticketing/device-operation/cv-operation/power-all-cv-on/power-all-cv-on.component';
import { PowerAllCVOffComponent } from '@views/ticketing/device-operation/cv-operation/power-all-cv-off/power-all-cv-off.component';
import { CVPowerControlComponent } from '@views/ticketing/device-operation/cv-operation/cv-power-control/cv-power-control.component';
import { ResetAllCVComponent } from '@views/ticketing/device-operation/cv-operation/reset-all-cv/reset-all-cv.component';

//BLS Operation
import { BLSOperationMenuComponent } from '@views/ticketing/device-operation/bls-operation/bls-operation-menu/bls-operation-menu.component';
import { ManualLocationComponent } from '@views/ticketing/device-operation/bls-operation/manual-location/manual-location.component';
import { AutoLocationComponent } from '@views/ticketing/device-operation/bls-operation/auto-location/auto-location.component';

//Printer Operation
import { PrinterOperationMenuComponent } from '@views/ticketing/device-operation/printer-operation/printer-operation-menu/printer-operation-menu.component';
import { InspectorTicketComponent } from '@views/ticketing/device-operation/printer-operation/inspector-ticket/inspector-ticket.component';
import { DailyTripLogComponent } from '@views/ticketing/device-operation/printer-operation/daily-trip-log/daily-trip-log.component';
import { TestReceiptComponent } from '@views/ticketing/device-operation/printer-operation/test-receipt/test-receipt.component';
import { PrinterOnComponent } from '@views/ticketing/device-operation/printer-operation/printer-on/printer-on.component';
import { PrinterOffComponent } from '@views/ticketing/device-operation/printer-operation/printer-off/printer-off.component';
import { PrinterStatusComponent } from '@views/ticketing/device-operation/printer-operation/printer-status/printer-status.component';

import { MqttComponent } from '@views/mqtt/mqtt.component';

export const routerUrls = {
    private: {
        main: {
            url: 'main',
            frontExit: 'main/front-exit',
            cashPayment: 'main/cash-payment',
            toggleRearDoor: 'main/toggle-rear-door',
            free: 'main/free',
            redeem: 'main/redeem',
            breakdown: 'main/breakdown',
            busStopFare: (id?: string) => (id ? `main/bus-stop-fare/${id}` : 'main/bus-stop-fare/:busStopId'),
        },
        ticketing: {
            url: 'ticketing',
            topUp: 'ticketing/top-up',
            cancelRideCV1: 'ticketing/cancel-ride-cv1',
            cancelRideCV2: 'ticketing/cancel-ride-cv2',
            concessionCV1: 'ticketing/concession-cv1',
            concessionCV2: 'ticketing/concession-cv2',
            deviceOperation: {
                url: 'ticketing/device-operation',
                cv: {
                    url: 'ticketing/device-operation/cv',
                    showCVStatus: 'ticketing/device-operation/cv/show-cv-status',
                    setCV: 'ticketing/device-operation/cv/set-cv',
                    cvModeControl: 'ticketing/device-operation/cv/cv-mode-control',
                    powerAllCVOn: 'ticketing/device-operation/cv/power-all-cv-on',
                    powerAllCVOff: 'ticketing/device-operation/cv/power-all-cv-off',
                    cvPowerControl: 'ticketing/device-operation/cv/cv-power-control',
                    resetAllCV: 'ticketing/device-operation/cv/reset-all-cv',
                },
                bls: {
                    url: 'ticketing/device-operation/bls',
                    manualLocation: 'ticketing/device-operation/bls/manual-location',
                    autoLocation: 'ticketing/device-operation/bls/auto-location',
                },
                printer: {
                    url: 'ticketing/device-operation/printer',
                    inspectorTicket: 'ticketing/device-operation/printer/inspector-ticket',
                    dailyTripLog: 'ticketing/device-operation/printer/daily-trip-log',
                    testReceipt: 'ticketing/device-operation/printer/test-receipt',
                    retentionTicket: 'ticketing/device-operation/printer/retention-ticket',
                    printerOn: 'ticketing/device-operation/printer/printer-on',
                    printerOff: 'ticketing/device-operation/printer/printer-off',
                    status: 'ticketing/device-operation/printer/status',
                },
            },
        },
        fms: {
            url: 'fms',
        },
        maintenance: {
            url: 'maintenance',
            ticketing: {
                url: 'maintenance/ticketing',
                blsInformation: 'maintenance/ticketing/bls-information',
                calibrteBls: 'maintenance/ticketing/calibrate-bls',
                calibrateBlsManualInput: 'maintenance/ticketing/calibrate-bls/manual-input',
                calibrateBlsClibration: 'maintenance/ticketing/calibrate-bls/bls-calibration',
                changeWlanKey: 'maintenance/ticketing/change-wlan-key',
                checkPrinter: 'maintenance/ticketing/check-printer',
                displayAudit: 'maintenance/ticketing/display-audit',
                gyroSwitch: 'maintenance/ticketing/gyro-switch',
                loadParamater: 'maintenance/ticketing/load-parameter',
                printBcvResult: 'maintenance/ticketing/print-bcv-result',
                redetectBls: 'maintenance/ticketing/redetect-bls',
                redetectCrp: 'maintenance/ticketing/redetect-crp',
                redetectCv: 'maintenance/ticketing/redetect-cv',
                redetectFms: 'maintenance/ticketing/redetect-fms',
                resetBls: 'maintenance/ticketing/reset-bls',
                saveTransaction: 'maintenance/ticketing/save-transaction',
                testPrint: 'maintenance/ticketing/test-print',
                versionInfo: 'maintenance/ticketing/version-info',
                ticketingConsole: 'maintenance/ticketing/ticketing-console',
                ticketingConsoleDeckType: 'maintenance/ticketing/ticketing-console/deck-type',
                ticketingConsoleBLS: 'maintenance/ticketing/ticketing-console/bls',
                ticketingConsoleTime: 'maintenance/ticketing/ticketing-console/time-setting',
                ticketingConsoleDate: 'maintenance/ticketing/ticketing-console/date-setting',
                ticketingConsoleComplimentaryDay: 'maintenance/ticketing/ticketing-console/complimentary-day',
                ticketingConsoleDeleteParameter: 'maintenance/ticketing/ticketing-console/delete-parameter',
            },
        },
    },
    public: {
        signIn: 'sign-in',
        welcome: 'welcome',
        mqtt: 'mqtt',
    },
};

export const nestedUrlHandler = (url, textToRemove) => url?.replace(textToRemove, '');

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full',
    },
    {
        path: routerUrls?.public?.signIn,
        component: SignInComponent,
    },
    {
        path: routerUrls?.public?.welcome,
        component: WelcomeComponent,
    },
    {
        path: routerUrls?.public?.mqtt,
        component: MqttComponent,
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: routerUrls?.private?.main?.url,
                component: MainComponent,
                children: [
                    {
                        path: '',
                        component: GeneralInformationComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.main?.frontExit,
                            `${routerUrls?.private?.main?.url}/`,
                        ),
                        component: FrontExitComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.main?.cashPayment,
                            `${routerUrls?.private?.main?.url}/`,
                        ),
                        component: CashPaymentComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.main?.toggleRearDoor,
                            `${routerUrls?.private?.main?.url}/`,
                        ),
                        component: ToggleRearDoorComponent,
                    },
                    {
                        path: nestedUrlHandler(routerUrls?.private?.main?.free, `${routerUrls?.private?.main?.url}/`),
                        component: FreeComponent,
                    },
                    {
                        path: nestedUrlHandler(routerUrls?.private?.main?.redeem, `${routerUrls?.private?.main?.url}/`),
                        component: RedeemComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.main?.breakdown,
                            `${routerUrls?.private?.main?.url}/`,
                        ),
                        component: BreakdownComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.main?.busStopFare(),
                            `${routerUrls?.private?.main?.url}/`,
                        ),
                        component: BusStopFareComponent,
                    },
                ],
            },
            {
                path: routerUrls?.private?.ticketing?.url,
                component: TicketingMenuComponent,
            },
            { path: routerUrls?.private?.ticketing?.topUp, component: TopUpComponent },
            { path: routerUrls?.private?.ticketing?.cancelRideCV1, component: CancelRideCV1Component },
            { path: routerUrls?.private?.ticketing?.cancelRideCV2, component: CancelRideCV2Component },
            { path: routerUrls?.private?.ticketing?.concessionCV1, component: ConcessionCV1Component },
            { path: routerUrls?.private?.ticketing?.concessionCV2, component: ConcessionCV2Component },
            {
                path: routerUrls?.private?.ticketing?.deviceOperation?.url,
                component: DeviceOperationLayoutComponent,
                children: [
                    {
                        path: '',
                        component: CVOperationMenuComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.ticketing?.deviceOperation?.cv?.url,
                            `${routerUrls?.private?.ticketing?.deviceOperation?.url}/`,
                        ),
                        component: CVOperationMenuComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.ticketing?.deviceOperation?.cv?.showCVStatus,
                            `${routerUrls?.private?.ticketing?.deviceOperation?.url}/`,
                        ),
                        component: ShowCVStatusComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.ticketing?.deviceOperation?.cv?.setCV,
                            `${routerUrls?.private?.ticketing?.deviceOperation?.url}/`,
                        ),
                        component: SelectBoardingTypeComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.ticketing?.deviceOperation?.cv?.cvModeControl,
                            `${routerUrls?.private?.ticketing?.deviceOperation?.url}/`,
                        ),
                        component: CVModeControlComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.ticketing?.deviceOperation?.cv?.powerAllCVOn,
                            `${routerUrls?.private?.ticketing?.deviceOperation?.url}/`,
                        ),
                        component: PowerAllCVOnComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.ticketing?.deviceOperation?.cv?.powerAllCVOff,
                            `${routerUrls?.private?.ticketing?.deviceOperation?.url}/`,
                        ),
                        component: PowerAllCVOffComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.ticketing?.deviceOperation?.cv?.cvPowerControl,
                            `${routerUrls?.private?.ticketing?.deviceOperation?.url}/`,
                        ),
                        component: CVPowerControlComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.ticketing?.deviceOperation?.cv?.resetAllCV,
                            `${routerUrls?.private?.ticketing?.deviceOperation?.url}/`,
                        ),
                        component: ResetAllCVComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.ticketing?.deviceOperation?.bls?.url,
                            `${routerUrls?.private?.ticketing?.deviceOperation?.url}/`,
                        ),
                        component: BLSOperationMenuComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.ticketing?.deviceOperation?.bls?.manualLocation,
                            `${routerUrls?.private?.ticketing?.deviceOperation?.url}/`,
                        ),
                        component: ManualLocationComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.ticketing?.deviceOperation?.bls?.autoLocation,
                            `${routerUrls?.private?.ticketing?.deviceOperation?.url}/`,
                        ),
                        component: AutoLocationComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.ticketing?.deviceOperation?.printer?.url,
                            `${routerUrls?.private?.ticketing?.deviceOperation?.url}/`,
                        ),
                        component: PrinterOperationMenuComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.ticketing?.deviceOperation?.printer?.inspectorTicket,
                            `${routerUrls?.private?.ticketing?.deviceOperation?.url}/`,
                        ),
                        component: InspectorTicketComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.ticketing?.deviceOperation?.printer?.dailyTripLog,
                            `${routerUrls?.private?.ticketing?.deviceOperation?.url}/`,
                        ),
                        component: DailyTripLogComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.ticketing?.deviceOperation?.printer?.testReceipt,
                            `${routerUrls?.private?.ticketing?.deviceOperation?.url}/`,
                        ),
                        component: TestReceiptComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.ticketing?.deviceOperation?.printer?.printerOn,
                            `${routerUrls?.private?.ticketing?.deviceOperation?.url}/`,
                        ),
                        component: PrinterOnComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.ticketing?.deviceOperation?.printer?.printerOff,
                            `${routerUrls?.private?.ticketing?.deviceOperation?.url}/`,
                        ),
                        component: PrinterOffComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.ticketing?.deviceOperation?.printer?.status,
                            `${routerUrls?.private?.ticketing?.deviceOperation?.url}/`,
                        ),
                        component: PrinterStatusComponent,
                    },
                ],
            },
            {
                path: routerUrls?.private?.fms?.url,
                component: FMSComponent,
            },
            {
                path: routerUrls?.private?.maintenance?.url,
                component: MaintenanceMenuComponent,
            },
            {
                path: routerUrls?.private?.maintenance?.ticketing?.url,
                component: MaintenanceTicketingComponent,
                children: [
                    { path: '', component: BLSInformationComponent },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.blsInformation,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: BLSInformationComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.calibrteBls,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: CalibrateBLSComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.calibrateBlsManualInput,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: CalibrateBLSManualInputComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.calibrateBlsClibration,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: CalibrateBLSCalibrationComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.changeWlanKey,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: ChangeWlanKeyComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.checkPrinter,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: CheckPrinterComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.displayAudit,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: DisplayAuditComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.gyroSwitch,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: GyroSwitchComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.loadParamater,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: LoadParameterComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.printBcvResult,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: PrintBcvResultComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.redetectBls,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: RedetectBLSComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.redetectCrp,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: RedetectCRPComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.redetectCv,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: RedetectCVComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.redetectFms,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: RedetectFMSComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.resetBls,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: ResetBLSComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.saveTransaction,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: SaveTransactionComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.testPrint,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: TestPrintComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.versionInfo,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: VersionInfoComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.ticketingConsole,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: TicketingConsoleTableComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.ticketingConsoleDeckType,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: TicketingConsoleDeckTypeComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.ticketingConsoleBLS,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: TicketingConsoleBLSComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.ticketingConsoleTime,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: TicketingConsoleTimeSettingComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.ticketingConsoleDate,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: TicketingConsoleDateSettingComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.ticketingConsoleComplimentaryDay,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: TicketingConsoleComplimentaryDayComponent,
                    },
                    {
                        path: nestedUrlHandler(
                            routerUrls?.private?.maintenance?.ticketing?.ticketingConsoleDeleteParameter,
                            `${routerUrls?.private?.maintenance?.ticketing?.url}/`,
                        ),
                        component: TicketingConsoleDeleteParameterComponent,
                    },
                ],
            },
        ],
    },
];
