import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Palette } from '../../../models/palette.model';
import { getGeneratedArray } from '../../../../testing/_helper-functions';
import { PaletteGenerator } from '../../../../testing/palette.generator';

@Injectable({
    providedIn: 'root'
})
export class PalettesApiService {

    constructor() {
    }

    getPalettes(): Observable<Palette[]> {
        return of(getGeneratedArray(PaletteGenerator));
    }
}
