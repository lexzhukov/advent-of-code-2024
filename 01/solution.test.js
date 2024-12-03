import { readFileSync } from 'node:fs';

import { describe, expect, test } from 'vitest';

import { part1, part2 } from './solution';

const exampleInput = `3   4
4   3
2   5
1   3
3   9
3   3`;

const puzzleInput = readFileSync('./01/data.txt', 'utf8');

describe('day 1', () => {
  describe('part 1', () => {
    test('should return the correct sum for the example input', () => {
      expect(part1(exampleInput)).toBe(11);
    });

    test('should return the correct sum for the puzzle input', () => {
      expect(part1(puzzleInput)).toBe(2769675);
    });
  });

  describe('part 2', () => {
    test('should return the correct sum for the example input', () => {
      expect(part2(exampleInput)).toBe(31);
    });

    test('should return the correct sum for the puzzle input', () => {
      expect(part2(puzzleInput)).toBe(24643097);
    });
  });
});
