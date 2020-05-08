import { NgModule } from '@angular/core';
import { MatCardModule, MatGridListModule, MatGridTile, MatProgressSpinnerModule } from '@angular/material';

const materialModules = [
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule,
];

@NgModule({
    imports: [
        ...materialModules,
    ],
    exports: [
        ...materialModules,
    ],
})
export class MaterialModule {
}
