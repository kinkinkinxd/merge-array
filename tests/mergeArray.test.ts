
import { merge } from '../src/mergeArray';

describe('merge array function', () => {
    test('merges two sorted arrays', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [2, 4, 6];
        const result1 = merge(collection1, collection2);
        expect(result1).toStrictEqual([1, 2, 3, 4, 5, 6]);

        const collection3 = [5, 6, 7];
        const collection4 = [8, 9, 10];
        const result2 = merge(collection3, collection4);
        expect(result2).toStrictEqual([5, 6, 7, 8, 9, 10]);
    });

    test('merges different size arrays', () => {
        const collection1 = [1, 3, 5, 6];
        const collection2 = [2, 4, 6, 7, 8];
        const result1 = merge(collection1, collection2);
        expect(result1).toStrictEqual([1, 2, 3, 4, 5, 6, 6, 7, 8]);
    })

    test('merges two same arrays', () => {
        const collection1 = [1, 2, 3, 4];
        const collection2 = [1, 2, 3, 4];
        const result1 = merge(collection1, collection2);
        expect(result1).toStrictEqual([1, 1, 2, 2, 3, 3, 4, 4]);
    })

    describe('merge array with edge cases', () => {
        test('should handle one empty collection', () => {
            const collection1: number[] = [];
            const collection2 = [2, 4, 6];
            const expected1 = [2, 4, 6];
            const result1 = merge(collection1, collection2);
            expect(result1).toStrictEqual(expected1);

            const collection3 = [1, 3, 5];
            const collection4: number[] = [];
            const expected2 = [1, 3, 5];
            const result2 = merge(collection3, collection4);
            expect(result2).toStrictEqual(expected2);
        });
        test('should handle both empty collections', () => {
            const collection5: number[] = [];
            const collection6: number[] = [];
            const expected3: any[] = [];
            const result3 = merge(collection5, collection6);
            expect(result3).toStrictEqual(expected3);
        });
    });
});

