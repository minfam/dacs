export interface SideNavMenu {
    id: string;
    label: string;
    route: string;
}

export const maintenanceTicketingMenu: SideNavMenu[] = [
    {
        id: 'view-parameter',
        label: 'View Parameter',
        route: '/view-parameter',
    },
    {
        id: 'ticketing-console',
        label: 'Configure Ticketing Console',
        route: '/ticketing-console',
    },
    {
        id: 'calibrate-bls',
        label: 'Calibrate BLS',
        route: '/calibrate-bls',
    },
    {
        id: 'version-info',
        label: 'Version Info',
        route: '/version-info',
    },
    {
        id: 'bls-information',
        label: 'BLS Information',
        route: '/bls-information',
    },
    {
        id: 'reset-bls',
        label: 'Reset BLS',
        route: '/reset-bls',
    },
    {
        id: 'test-print',
        label: 'Test Print',
        route: '/test-print',
    },
    {
        id: 'check-printer',
        label: 'Check Printer',
        route: '/check-printer',
    },
    {
        id: 'gyro-switch',
        label: 'Gyro Switch',
        route: '/gyro-switch',
    },
    {
        id: 'redetect-crp',
        label: 'Redetect CRP',
        route: '/redetect-crp',
    },
    {
        id: 'redetect-cv',
        label: 'Redetect CV',
        route: '/redetect-cv',
    },
    {
        id: 'redetect-fms',
        label: 'Redetect FMS',
        route: '/redetect-fms',
    },
    {
        id: 'redetect-bls',
        label: 'Redetect BLS',
        route: '/redetect-bls',
    },
    {
        id: 'load-parameter',
        label: 'Load Parameters',
        route: '/load-parameter',
    },
    {
        id: 'save-transaction',
        label: 'Save Transaction',
        route: '/save-transaction',
    },
    {
        id: 'resend-cv-key',
        label: 'Resend CV Key',
        route: '/resend-cv-key',
    },
    {
        id: 'print-bcv-result',
        label: 'Print BCV Results',
        route: '/print-bcv-result',
    },
    {
        id: 'display-audit',
        label: 'Display Audit',
        route: '/display-audit',
    },
    {
        id: 'change-wlan-key',
        label: 'Change WLAN Key',
        route: '/change-wlan-key',
    },
];

export const deviceOperationMenu: SideNavMenu[] = [
    {
        id: 'device-operation/cv',
        label: 'CV Operations',
        route: '/device-operation/cv',
    },
    {
        id: 'device-operation/bls',
        label: 'BLS Operations',
        route: '/device-operation/bls',
    },
    {
        id: 'device-operation/printer',
        label: 'Printer Operations',
        route: '/device-operation/printer',
    },
];
