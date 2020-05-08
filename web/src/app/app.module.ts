import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { RootModule } from './root/root.module';
import { FeaturesModule } from './features/features.module';
import { RootComponent } from './root/root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [],
    imports: [
        AppRoutingModule,
        RootModule,
        FeaturesModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [
        RootComponent,
    ]
})
export class AppModule {
}
