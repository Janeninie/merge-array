export function mergeAndSortArrays(
  arr1: number[],
  arr2: number[],
  arr3: number[]
): number[] {
  const reversedArr3: number[] = [];
  for (let i = arr3.length - 1; i >= 0; i--) {
    reversedArr3.push(arr3[i]);
  }

  let mergedArray: number[] = [];
  let i = 0,
    j = 0,
    k = 0;

  while (i < arr1.length || j < arr2.length || k < reversedArr3.length) {
    let val1: number = i < arr1.length ? arr1[i] : Infinity;
    let val2: number = j < arr2.length ? arr2[j] : Infinity;
    let val3: number = k < reversedArr3.length ? reversedArr3[k] : Infinity;

    if (val1 <= val2 && val1 <= val3) {
      mergedArray.push(val1);
      i++;
    } else if (val2 <= val1 && val2 <= val3) {
      mergedArray.push(val2);
      j++;
    } else {
      mergedArray.push(val3);
      k++;
    }
  }

  return mergedArray;
}
