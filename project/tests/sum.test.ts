import { sum } from '..';

describe('sum', () => {
    it('should sum', () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(2, 2)).toBe(3);
    });
});
