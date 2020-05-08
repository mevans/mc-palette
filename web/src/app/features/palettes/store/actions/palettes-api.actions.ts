import { Palette } from '../../../../models/palette.model';
import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

const fetchPalettesSuccess = createAction(
    '[Palettes Api] Fetch palettes Success',
    props<{ palettes: Palette[] }>()
);

const fetchPalettesFailure = createAction(
    '[Palettes Api] Fetch palettes Failure',
    props<{ error: HttpErrorResponse }>()
);

export const PalettesApiActions = {
    fetchPalettesSuccess,
    fetchPalettesFailure,
};
