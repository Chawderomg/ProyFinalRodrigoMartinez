export function validarText(text) {
  if (typeof text !== 'string') return false;
  if (text.trim() === '') return false;

  return /^[a-zA-Z]+$/.test(text);
}
