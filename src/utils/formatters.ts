export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price);
};

export const formatDistance = (distance: number | undefined): string => {
  if (typeof distance !== 'number') return 'N/A';
  return `${distance.toFixed(1)}`;
};