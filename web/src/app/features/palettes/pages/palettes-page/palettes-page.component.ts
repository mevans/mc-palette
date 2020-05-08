import { Component, OnInit } from '@angular/core';
import { PalettesFacadeService } from '../../services/palettes-facade.service';
import { PalettesActions } from '../../store/actions/palettes.actions';
import { Observable } from 'rxjs';
import { Palette } from '../../../../models/palette.model';

@Component({
    selector: 'app-palettes-page',
    templateUrl: './palettes-page.component.html',
    styleUrls: ['./palettes-page.component.css']
})
export class PalettesPageComponent implements OnInit {

    initialising$: Observable<boolean>;
    palettes$: Observable<Palette[]>;

    constructor(
        private palettesFacadeService: PalettesFacadeService,
    ) {
    }

    ngOnInit() {
        this.palettesFacadeService.dispatch(PalettesActions.enterPage());
        this.initialising$ = this.palettesFacadeService.getInitialising();
        this.palettes$ = this.palettesFacadeService.getPalettes();
    }

}
