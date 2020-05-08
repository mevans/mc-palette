import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PalettesPageComponent } from './features/palettes/pages/palettes-page/palettes-page.component';
import { DetailPageComponent } from './features/detail/pages/detail-page/detail-page.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'palettes' },
    { path: 'palettes', component: PalettesPageComponent },
    { path: 'palette/:id', component: DetailPageComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule {
}
