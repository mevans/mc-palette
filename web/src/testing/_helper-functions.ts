import * as faker from 'faker';

export function getRandomArrayNumber(max?: number): number[] {
    return new Array(Math.floor(Math.random() * (max || 10)) + 1)
        .fill(null)
        .map(e => faker.random.number());
}

export function getGeneratedArray<T>(generator: (override?: Partial<T>) => T, overrideFn?: (n: number) => Partial<T>): T[] {
    return getRandomArrayNumber().map(n => {
        const override = overrideFn ? overrideFn(n) : {};
        return generator(override);
    });
}
