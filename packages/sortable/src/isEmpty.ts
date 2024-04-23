/**
 * @ignore
 * Returns isEmpty, whether it's an immutable List or an array
 */
export function isEmpty(list: Iterable<any>) {
  for (const _ of list) {
    return false;
  }
  return true;
}
