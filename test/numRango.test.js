import { describe, it, expect } from 'vitest';
import { inRange } from '../src/numRango.js';

describe('inRange', () => {
  it('numero dentro del rango', () => {
    expect(inRange(5, 1, 10)).toBe(true);
  });

  it('fuera del rango', () => {
    expect(inRange(20, 1, 10)).toBe(false);
  });
});
