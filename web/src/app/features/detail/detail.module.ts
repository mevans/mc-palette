import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';


@NgModule({
    declarations: [
        DetailPageComponent,
    ],
    imports: [
        CommonModule,
    ],
    entryComponents: [
        DetailPageComponent,
    ],
})
export class DetailModule {
}
