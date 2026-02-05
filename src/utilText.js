export function removeSpaces(text) {
  if (typeof text !== 'string') return '';
  return text.trim().replace(/\s+/g, ' ');
}

export function capitalize(text) {
  if (typeof text !== 'string') return '';

  return text
    .split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}
