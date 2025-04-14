import { mergeAndSortArrays } from "../src/merge";

describe("merge function", () => {
  test("merges arrays correctly", () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const collection3 = [9, 7, 0];
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 9];
    expect(mergeAndSortArrays(collection1, collection2, collection3)).toEqual(
      expected
    );
  });

  test("handles empty arrays", () => {
    expect(mergeAndSortArrays([], [], [])).toEqual([]);
    expect(mergeAndSortArrays([1, 2], [], [])).toEqual([1, 2]);
    expect(mergeAndSortArrays([], [3, 4], [])).toEqual([3, 4]);
    expect(mergeAndSortArrays([], [], [5, 4])).toEqual([4, 5]);
  });

  test("handles arrays with duplicate elements", () => {
    const collection1 = [1, 2, 2];
    const collection2 = [2, 3];
    const collection3 = [3, 2, 1];
    const expected = [1, 1, 2, 2, 2, 2, 3, 3];
    expect(mergeAndSortArrays(collection1, collection2, collection3)).toEqual(
      expected
    );
  });
});
