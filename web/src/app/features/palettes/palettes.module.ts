import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PalettesPageComponent } from './pages/palettes-page/palettes-page.component';
import { PalettesStoreModule } from './store/palettes-store.module';
import { PaletteCardComponent } from './components/palette-card/palette-card.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
    declarations: [
        PalettesPageComponent,
        PaletteCardComponent
    ],
    imports: [
        CommonModule,
        PalettesStoreModule,
        SharedModule,
    ],
    entryComponents: [
        PalettesPageComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
})
export class PalettesModule {
}
