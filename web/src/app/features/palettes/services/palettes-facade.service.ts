import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { PaletteState } from '../store/models/palettes-state.model';
import { PalettesSelectors } from '../store/selectors/palettes.selectors';
import { Observable } from 'rxjs';
import { Palette } from '../../../models/palette.model';

@Injectable({
    providedIn: 'root'
})
export class PalettesFacadeService {

    constructor(
        private store: Store<PaletteState>,
    ) {
    }

    getInitialising(): Observable<boolean> {
        return this.store.select(PalettesSelectors.selectInitialising);
    }

    getPalettes(): Observable<Palette[]> {
        return this.store.select(PalettesSelectors.selectPalettes);
    }

    dispatch(action: Action): void {
        this.store.dispatch(action);
    }
}
