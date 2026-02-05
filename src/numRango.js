export function inRange(num, min, max) {
  if (typeof num !== 'number') return false;
  return num >= min && num <= max;
}
