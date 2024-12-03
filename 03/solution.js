// https://adventofcode.com/2024/day/3

export function part1(input) {
  const commands = [...input.matchAll(/mul\((\d{1,3}),(\d{1,3})\)/g)];
  const values = commands.map((command) => [
    parseInt(command[1], 10),
    parseInt(command[2], 10),
  ]);
  const sum = values.reduce((a, b) => a + b[0] * b[1], 0);
  return sum;
}

export function part2(input) {
  const commands = [
    ...input.matchAll(/mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\)/g),
  ];
  let isDo = true;
  const values = [];
  for (let i = 0; i < commands.length; i++) {
    const command = commands[i][0];
    if (command === `don't()`) {
      isDo = false;
      continue;
    }
    if (command === `do()`) {
      isDo = true;
      continue;
    }
    if (isDo) {
      const value = [
        parseInt(commands[i][1], 10),
        parseInt(commands[i][2], 10),
      ];
      values.push(value);
    }
  }
  const sum = values.reduce((a, b) => a + b[0] * b[1], 0);
  return sum;
}
