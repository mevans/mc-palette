import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { palettesStoreKey } from './models/palettes-state.model';
import { palettesReducer } from './reducers/palettes.reducer';
import { PalettesEffects } from './effects/palettes.effects';

@NgModule({
    imports: [
        StoreModule.forFeature(palettesStoreKey, palettesReducer),
        EffectsModule.forFeature([
            PalettesEffects,
        ]),
    ]
})
export class PalettesStoreModule {
}
