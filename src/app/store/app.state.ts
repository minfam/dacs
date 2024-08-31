import { Action, ActionReducer } from '@ngrx/store';
import { MainState, dataReducer } from './main/main.reducer';

export interface AppState {
    main: MainState;
}

export interface AppStore {
    main: ActionReducer<MainState, Action>;
}

export const appStore: AppStore = {
    main: dataReducer,
};
