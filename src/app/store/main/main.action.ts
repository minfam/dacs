import { createAction, props } from '@ngrx/store';
import { IBusStop } from '@models';

export const updateLineActive = createAction('[Data] Line Active', props<{ payload: number }>());
export const selectBusStop = createAction('[Data] Select Bus Stop', props<{ payload: IBusStop | null }>());
export const selectBusStopForFare = createAction('[Data] Select Bus Stop For Fare', props<{ payload: string }>());
export const updateActiveCVs = createAction('[Data] Active CVs', props<{ payload: number[] }>());
export const updateFreeCVs = createAction('[Data] Update Free CVs', props<{ payload: number[] }>());
