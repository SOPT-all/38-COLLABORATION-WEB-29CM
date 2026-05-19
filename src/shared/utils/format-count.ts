const compactNumberFormatter = new Intl.NumberFormat('en', {
  notation: 'compact',
  maximumFractionDigits: 0,
});

export const formatCompactCount = (count: number): string =>
  compactNumberFormatter.format(count);
