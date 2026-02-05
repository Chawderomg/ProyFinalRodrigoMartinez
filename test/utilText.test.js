import { describe, it, expect } from 'vitest';
import { removeSpaces, capitalize } from '../src/utilText';

describe('Util de texto', () => {

  it('limpia espacios al inicio, final y dobles', () => {
    expect(removeSpaces('   hola   mundo   ')).toBe('hola mundo');
  });

  it('capitaliza correctamente', () => {
    expect(capitalize('hola mundo cruel')).toBe('Hola Mundo Cruel');
  });

  it('se pueden usar juntas', () => {
    const text = '   hOLa    mUnDo   ';
    const result = capitalize(removeSpaces(text));
    expect(result).toBe('Hola Mundo');
  });

  it('maneja valores no string', () => {
    expect(removeSpaces(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
  });

});
