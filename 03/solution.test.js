import { readFileSync } from 'node:fs';

import { describe, expect, test } from 'vitest';

import { part1, part2 } from './solution';

const exampleInput = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;

const example2Input = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;

const puzzleInput = readFileSync('./03/data.txt', 'utf8');

describe('day 3', () => {
  describe('part 1', () => {
    test('should return the correct result for the example input', () => {
      expect(part1(exampleInput)).toBe(161);
    });

    test('should return the correct result for the puzzle input', () => {
      expect(part1(puzzleInput)).toBe(196826776);
    });
  });

  describe('part 2', () => {
    test('should return the correct result for the example input', () => {
      expect(part2(example2Input)).toBe(48);
    });

    test('should return the correct result for the puzzle input', () => {
      expect(part2(puzzleInput)).toBe(106780429);
    });
  });
});
