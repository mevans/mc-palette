import { createAction } from '@ngrx/store';

const enterPage = createAction(
    '[Palettes Page] Enter page',
);

export const PalettesActions = {
    enterPage,
};
