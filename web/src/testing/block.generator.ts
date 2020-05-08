import { assignIn } from 'lodash';
import { Block } from '../app/models/block.model';
import * as faker from 'faker';

export function BlockGenerator(override?: Partial<Block>): Block {
    const block: Block = {
        imageUrl: `http://via.placeholder.com/64x64`,
        name: faker.random.word(),
        slug: faker.random.words()
    };

    return assignIn(block, override);
}
