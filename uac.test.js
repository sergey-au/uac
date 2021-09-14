import {findAllIndices, isMonotonic} from "./uac";

describe('monotonic', () => {
  it('should be true for [] ', () => {
    expect(isMonotonic([])).toBe(true)
  });
  it('should be true for [1] ', () => {
    expect(isMonotonic([1])).toBe(true)
  });
  it('should be true for [1, 2] ', () => {
    expect(isMonotonic([1, 2])).toBe(true)
  });
  it('should be true for [1, 1, 1, 1, 1, 1]', () => {
    expect(isMonotonic([1, 1, 1, 1, 1, 1])).toBe(true)
  });
  it('should be true for [1, 1, 2, 2, 3, 4, 4, 5]', () => {
    expect(isMonotonic([1, 1, 2, 2, 3, 4, 4, 5])).toBe(true)
  });
  it('should be true for [5, 4, 4, 3, 2, 2, 1, 0, 0, -1]', () => {
    expect(isMonotonic([5, 4, 4, 3, 2, 2, 1, 0, 0, -1])).toBe(true)
  });
  it('should be true for [-1, -5, -10, -1100, -1100, -1101, -2000]', () => {
    expect(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -2000])).toBe(true)
  });

  // not monotonic
  it('should be false for [1, 2, 4, 3] ', () => {
    expect(isMonotonic([1, 2, 4, 3])).toBe(false)
  });
  it('should be false for [5, 5, 4, 3, 3, 1, 2, 0]', () => {
    expect(isMonotonic([5, 5, 4, 3, 3, 1, 2, 0])).toBe(false)
  });

});

describe('describe()', () => {
  it('should return [0, 19] the fox jumps over the dog, the', () => {
    const result = findAllIndices('the fox jumps over the dog', 'the');
    expect(result).toEqual([0, 19])
  });
  it('should return [] the fox jumps over the dog, brown', () => {
    const result = findAllIndices('the fox jumps over the dog', 'brown');
    expect(result).toEqual([])
  });
  it('should return  [5, 14, 24] the fox jumps over the dog, o', () => {
    const result = findAllIndices('the fox jumps over the dog', 'o');
    expect(result).toEqual([5, 14, 24])
  });
  it('should return [3, 7, 13, 18, 22] the fox jumps over the dog, \' \'',
      () => {
        const result = findAllIndices('the fox jumps over the dog', ' ');
        expect(result).toEqual([3, 7, 13, 18, 22])
      });
});
