import { createFeatureSelector, createSelector } from '@ngrx/store';
import { palettesStoreKey, PaletteState } from '../models/palettes-state.model';

const selectPalettesState = createFeatureSelector<PaletteState>(palettesStoreKey);

const selectInitialising = createSelector(selectPalettesState, (state) => state.initialising);
const selectPalettes = createSelector(selectPalettesState, (state) => state.palettes);

export const PalettesSelectors = {
    selectInitialising,
    selectPalettes,
};
