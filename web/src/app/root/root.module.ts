import { NgModule } from '@angular/core';
import { RootComponent } from './root.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { RootStoreModule } from './store/root-store.module';

@NgModule({
    declarations: [
        RootComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        BrowserModule,
        RootStoreModule,
    ],
})
export class RootModule {
}
