export interface IBusStop {
    id: string;
    name: string;
    time: string;
    left?: string;
    right?: boolean;
    badgeColor?: string;
    color?: string;
    textStyle?: string;
    isFare?: boolean;
}
