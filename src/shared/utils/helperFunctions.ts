export function getYear(date: string | undefined) {
  return date ? Number(date.split('-')[0]) : undefined;
}

export function invariant<T>(
  value: T | null | undefined
): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw new Error('Invariant violation');
  }
}
