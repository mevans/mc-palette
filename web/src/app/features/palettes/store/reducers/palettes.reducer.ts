import { PaletteState } from '../models/palettes-state.model';
import { Action, createReducer, on } from '@ngrx/store';
import { PalettesActions } from '../actions/palettes.actions';
import { PalettesApiActions } from '../actions/palettes-api.actions';

export const palettesInitialState: PaletteState = {
    initialising: undefined,
    palettes: undefined,
};

const palettesReducerFn = createReducer(
    palettesInitialState,
    on(PalettesActions.enterPage, (state) => ({
        ...state,
        initialising: true,
    })),
    on(PalettesApiActions.fetchPalettesSuccess, (state, { palettes }) => ({
        ...state,
        initialising: false,
        palettes,
    }))
);

export function palettesReducer(state: PaletteState | undefined, action: Action) {
    return palettesReducerFn(state, action);
}

