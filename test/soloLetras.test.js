import { describe, it, expect } from 'vitest';
import { validarText } from '../src/soloLetras.js';

describe('Validando Texto', () => {
  it('acepta solo letras', () => {
    expect(validarText('Hola')).toBe(true);
  });

  it('rechaza números', () => {
    expect(validarText('Hola123')).toBe(false);
  });

  it('rechaza vacío', () => {
    expect(validarText('')).toBe(false);
  });
});
