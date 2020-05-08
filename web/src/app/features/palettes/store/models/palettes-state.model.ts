import { Palette } from '../../../../models/palette.model';

export const palettesStoreKey = 'palettes';

export interface PaletteState {
    initialising: boolean;
    palettes: Palette[];
}
