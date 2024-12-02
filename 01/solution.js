// https://adventofcode.com/2024/day/1

export function part1(input) {
  const pairs = input
    .split('\n')
    .map((line) => line.split(/\s+/))
    .map(([a, b]) => [Number(a), Number(b)]);
  const leftIds = pairs.map(([a]) => a).sort((a, b) => a - b);
  const rightIds = pairs.map(([, b]) => b).sort((a, b) => a - b);
  const distances = leftIds.map((left, i) => Math.abs(left - rightIds[i]));
  const sum = distances.reduce((a, b) => a + b, 0);
  return sum;
}

export function part2(input) {
  const pairs = input
    .split('\n')
    .map((line) => line.split(/\s+/))
    .map(([a, b]) => [Number(a), Number(b)]);
  const leftIds = pairs.map(([a]) => a);
  const rightIds = pairs.map(([, b]) => b);
  const appearances = leftIds.map(
    (left) => left * rightIds.filter((right) => left === right).length,
  );
  const sum = appearances.reduce((a, b) => a + b, 0);
  return sum;
}
