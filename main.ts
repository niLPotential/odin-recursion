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
