import { createReducer, on, createSelector } from '@ngrx/store';
import { updateLineActive, selectBusStop, selectBusStopForFare, updateActiveCVs, updateFreeCVs } from './main.action';
import { AppState } from '@store/app.state';
import { IBusStop } from '@models';

export interface MainState {
    activeCVs: number[];
    freeCVs: number[];
    lineActive: number;
    busStopList: IBusStop[];
    selectedBusStop: IBusStop | null;
    busStopFareId: string;
}

export const initialMainState: MainState = {
    activeCVs: [],
    freeCVs: [],
    lineActive: 0,
    selectedBusStop: null,
    busStopFareId: '',
    busStopList: [
        // {
        //     id: '123',
        //     name: 'Bedok Interchange Boarding Berth 3 to 10',
        //     time: '10:00',
        //     left: 'DESTINATION',
        //     badgeColor: '#05161b',
        //     color: '#17333d',
        // },
        {
            id: '57059',
            name: 'Opp Sembawang Air Base',
            time: '09:39',
            left: 'NOW',
            badgeColor: '#013c5c',
            right: true,
            color: '#046a7b',
        },
        {
            id: '48149',
            name: 'Mandai Crematorium &  Columbarium',
            time: '09:45',
            left: 'NEXT',
            badgeColor: '#828282',
            color: '#071e24',
            textStyle: 'lighter',
        },
        {
            id: '48059',
            name: 'Opp Mandai Agrotech Pk',
            time: '09:52',
            color: '#071e24',
            textStyle: 'lighter',
        },
        {
            id: '48055',
            name: 'Opp Sembawang Air Base',
            time: '09:52',
            color: '#071e24',
            textStyle: 'lighter',
        },
        {
            id: '48098',
            name: 'Mandai Crematorium &  Columbarium',
            time: '09:52',
            color: '#071e24',
            textStyle: 'lighter',
        },
    ],
};

export const dataReducer = createReducer(
    initialMainState,

    on(updateLineActive, (state, { payload }) => {
        if (
            (payload < 0 && state.lineActive <= 0) ||
            (payload > 0 && state.lineActive === state.busStopList?.length - 1)
        ) {
            return {
                ...state,
            };
        }
        return {
            ...state,
            lineActive: state.lineActive + payload,
        };
    }),

    on(selectBusStop, (state, { payload }) => {
        return {
            ...state,
            selectedBusStop: payload,
        };
    }),

    on(selectBusStopForFare, (state, { payload }) => {
        // const nextBustStopList: IBusStop[] = [];
        // state.busStopList.forEach((_bs: IBusStop) => {
        //     if (_bs?.id === payload && _bs !== null) {
        //         nextBustStopList.push({ ..._bs, isFare: true });
        //     } else {
        //         nextBustStopList.push(_bs);
        //     }
        // });
        // return {
        //     ...state,
        //     selectedBusStop: null,
        //     busStopList: nextBustStopList,
        // };
        const idx: number = state.busStopList.findIndex((bs) => bs.id === payload);
        return {
            ...state,
            lineActive: idx,
            busStopFareId: payload,
        };
    }),

    on(updateActiveCVs, (state, { payload }) => {
        return {
            ...state,
            activeCVs: payload,
        };
    }),

    on(updateFreeCVs, (state, { payload }) => {
        return {
            ...state,
            activeCVs: payload,
            freeCVs: payload,
        };
    }),
);

export const selectMainState = (state: AppState) => state.main;

export const lineActive = createSelector(selectMainState, (state) => {
    return state.lineActive;
});

export const busStopList = createSelector(selectMainState, (state) => {
    return state.busStopList;
});

export const selectedBusStop = createSelector(selectMainState, (state) => {
    return state.selectedBusStop;
});

export const busStopFareId = createSelector(selectMainState, (state) => {
    return state.busStopFareId;
});

export const activeCVs = createSelector(selectMainState, (state) => {
    return state.activeCVs;
});

export const freeCVs = createSelector(selectMainState, (state) => {
    return state.freeCVs;
});

export { updateLineActive, selectBusStop, selectBusStopForFare, updateActiveCVs, updateFreeCVs };
