import {describe, expect, it} from '@jest/globals';
import {sum} from "../index"

describe('sum module for testing', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("add negative number to negative number", () => {
    expect(sum(-1, -2)).toBe(-3);
  })
  it("add positive number to positive number", () => {
    expect(sum(1, -2)).toBe(-1)
  })
});