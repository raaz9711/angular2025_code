export class Logger {
  log(msg: unknown) { console.log(msg); }
  error(msg: unknown) { console.error(msg); }
  warn(msg: unknown) { console.warn(msg); }
}

/**
 * Sorts an array of objects alphabetically by one or more keys.
 * @param list Array of objects to sort
 * @param keys One or more keys to sort by (in priority order)
 * @returns Sorted array
 */
export function sortByKeys<T>(list: T[], ...keys: (keyof T)[]): T[] {
  return [...list].sort((a, b) => {
    for (const key of keys) {
      const valA = (a[key] ?? '').toString().toLowerCase();
      const valB = (b[key] ?? '').toString().toLowerCase();
      if (valA < valB) return -1;
      if (valA > valB) return 1;
    }
    return 0;
  });
}