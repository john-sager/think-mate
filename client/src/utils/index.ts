export function omitId<T extends { id: string }>(obj: T): Omit<T, "id"> {
  const { id: _id, ...rest } = obj;
  void _id; // mark as intentionally unused
  return rest;
}
