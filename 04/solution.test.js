import { readFileSync } from 'node:fs';

import { describe, expect, test } from 'vitest';

import { part1, part2 } from './solution';

const exampleInput = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

const puzzleInput = readFileSync('./04/data.txt', 'utf8');

describe('day 4', () => {
  describe('part 1', () => {
    test('should return the correct result for the example input', () => {
      expect(part1(exampleInput)).toBe(18);
    });

    test('should return the correct result for the puzzle input', () => {
      expect(part1(puzzleInput)).toBe(2336);
    });
  });

  describe('part 2', () => {
    test('should return the correct result for the example input', () => {
      expect(part2(exampleInput)).toBe(9);
    });

    test('should return the correct result for the puzzle input', () => {
      expect(part2(puzzleInput)).toBe(1831);
    });
  });
});
