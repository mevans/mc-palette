import { assignIn } from 'lodash';
import { Palette } from '../app/models/palette.model';
import * as faker from 'faker';
import { getGeneratedArray } from './_helper-functions';
import { BlockGenerator } from './block.generator';

export function PaletteGenerator(override?: Partial<Palette>): Palette {
    const palette: Palette = {
        blocks: getGeneratedArray(BlockGenerator),
        likes: faker.random.number(),
        name: faker.random.words(),
    };

    return assignIn(palette, override);
}
