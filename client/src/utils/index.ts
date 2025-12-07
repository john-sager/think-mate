export function omitId<T extends { id: string }>(obj: T): Omit<T, "id"> {
  const { id: _id, ...rest } = obj;
  void _id; // mark as intentionally unused
  return rest;
}

/**
 * filters a list on a provided predicate into seperate filtered and unfiltered lists.
 * returns a tuple of filtered an non-filterd arrays.
 */
export const filterfy = <T>(items: T[], predicate: (item: T) => boolean) => {
  return items.reduce(
    (res: [T[], T[]], item) => {
      res[predicate(item) ? 0 : 1].push(item);
      return res;
    },
    [[], []]
  );
};
