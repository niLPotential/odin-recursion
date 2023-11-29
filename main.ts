export function fibs(n: number): number[] {
  const fibsArr: number[] = [];

  while (fibsArr.length < n) {
    switch (fibsArr.length) {
      case 0:
        fibsArr.push(0);
        break;
      case 1:
        fibsArr.push(1);
        break;
      default:
        fibsArr.push(fibsArr[fibsArr.length - 1] + fibsArr[fibsArr.length - 2]);
    }
  }
  return fibsArr;
}

export function fibsRec(n: number): number[] {
  const fibsRecArr: number[] = [];

  for (let i = 0; i < n; i++) {
    fibsRecArr.push(nthFibsNumber(i + 1));
  }

  return fibsRecArr;

  function nthFibsNumber(i: number): number {
    switch (i) {
      case 1:
        return 0;
      case 2:
        return 1;
      default:
        if (fibsRecArr.length < i) {
          return nthFibsNumber(i - 1) + nthFibsNumber(i - 2);
        } else {
          return fibsRecArr[i - 1];
        }
    }
  }
}

export function mergeSort(arr: number[]): number[] {
  switch (arr.length) {
    case 0:
      return arr;
    case 1:
      return arr;
    default: {
      const half = arr.length / 2;
      return mergeArr(
        mergeSort(arr.slice(0, half)),
        mergeSort(arr.slice(half))
      );
    }
  }

  function mergeArr(arr1: number[], arr2: number[]): number[] {
    const merged: number[] = [];

    while (arr1.length > 0 && arr2.length > 0) {
      merged.push(
        arr1[0] < arr2[0] ? (arr1.shift() as number) : (arr2.shift() as number)
      );
    }

    return merged.concat(arr1, arr2);
  }
}
