export interface IUser {
    id: string;
    name: string;
}

export interface ILogin {
    username: string;
    password: string;
}

export class Login implements ILogin {
    username: string = '';
    password: string = '';
}
