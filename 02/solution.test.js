import { readFileSync } from 'node:fs';
import { expect, test, describe } from 'vitest';

import { part1, part2 } from './solution';

const exampleInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

const puzzleInput = readFileSync('./02/data.txt', 'utf8');

describe('day 2', () => {
  describe('part 1', () => {
    test('should return the correct count for the example input', () => {
      expect(part1(exampleInput)).toBe(2);
    });

    test('should return the correct count for the puzzle input', () => {
      expect(part1(puzzleInput)).toBe(220);
    });
  });

  describe('part 2', () => {
    test('should return the correct count for the example input', () => {
      expect(part2(exampleInput)).toBe(4);
    });

    test('should return the correct count for the puzzle input', () => {
      expect(part2(puzzleInput)).toBe(296);
    });
  });
});
