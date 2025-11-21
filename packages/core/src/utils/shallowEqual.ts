export function shallowEqual(objA: any, objB: any) {
  if (objA === objB) {
    return true;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  const hasOwn = Object.prototype.hasOwnProperty;
  for (const key of keysA) {
    if (!hasOwn.call(objB, key) || objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
}
