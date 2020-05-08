import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const environmentImports = [];

if (!environment.production) {
    environmentImports.push(StoreDevtoolsModule.instrument({}));
}

@NgModule({
    imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        ...environmentImports,
    ]
})
export class RootStoreModule {
}

