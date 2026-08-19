export function assertUniqueIds<T extends { id: string }>(label: string, records: readonly T[]): void {
  const seen = new Set<string>();

  for (const record of records) {
    if (!record.id || record.id !== record.id.trim()) {
      throw new Error(`${label} contains an empty or untrimmed id: "${record.id}"`);
    }
    if (seen.has(record.id)) {
      throw new Error(`${label} contains a duplicate id: ${record.id}`);
    }
    seen.add(record.id);
  }
}
