import { Component, Input } from '@angular/core';
import { Palette } from '../../../../models/palette.model';

@Component({
    selector: 'app-palette-card',
    templateUrl: './palette-card.component.html',
    styleUrls: ['./palette-card.component.css']
})
export class PaletteCardComponent {

    @Input() palette: Palette;

}
