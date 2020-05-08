import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PalettesActions } from '../actions/palettes.actions';
import { PalettesApiService } from '../../services/palettes-api.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PalettesApiActions } from '../actions/palettes-api.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class PalettesEffects {
    constructor(
        private actions$: Actions,
        private palettesApiService: PalettesApiService,
    ) {
    }

    @Effect()
    fetchPalettes$ = this.actions$.pipe(
        ofType(PalettesActions.enterPage),
        switchMap(() => this.palettesApiService.getPalettes()),
        map(palettes => PalettesApiActions.fetchPalettesSuccess({ palettes })),
        catchError((error: HttpErrorResponse) => of(PalettesApiActions.fetchPalettesFailure({ error })))
    );
}
