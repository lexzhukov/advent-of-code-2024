// https://adventofcode.com/2024/day/4

export function part1(input) {
  const rows = input.split('\n');
  const needles = ['XMAS', 'SAMX'];
  let result = 0;
  for (let y = 0; y < rows.length; y++) {
    for (let x = 0; x < rows[y].length; x++) {
      for (const needle of needles) {
        if (checkHorizontal(x, y, needle, rows)) {
          result++;
        }
        if (checkVertical(x, y, needle, rows)) {
          result++;
        }
        if (checkDiagonalDown(x, y, needle, rows)) {
          result++;
        }
        if (checkDiagonalUp(x, y, needle, rows)) {
          result++;
        }
      }
    }
  }
  return result;
}

export function part2(input) {
  const rows = input.split('\n');
  let result = 0;
  for (let y = 0; y < rows.length; y++) {
    for (let x = 0; x < rows[y].length; x++) {
      const char = rows[y][x];
      if (char === 'A') {
        if (y - 1 < 0 || x - 1 < 0) {
          continue;
        }
        if (y + 1 > rows.length - 1 || x + 1 > rows[y].length - 1) {
          continue;
        }
        const topLeft = rows[y - 1][x - 1];
        const topRight = rows[y - 1][x + 1];
        const bottomLeft = rows[y + 1][x - 1];
        const bottomRight = rows[y + 1][x + 1];
        if (
          ((topLeft === 'M' && bottomRight === 'S') ||
            (topLeft === 'S' && bottomRight === 'M')) &&
          ((topRight === 'M' && bottomLeft === 'S') ||
            (topRight === 'S' && bottomLeft === 'M'))
        ) {
          result++;
        }
      }
    }
  }
  return result;
}

function checkHorizontal(x, y, needle, rows) {
  for (let k = 0; k < needle.length; k++) {
    if (x + k > rows[y].length - 1) {
      return false;
    }
    if (rows[y][x + k] !== needle[k]) {
      return false;
    }
  }
  return true;
}

function checkVertical(x, y, needle, rows) {
  for (let k = 0; k < needle.length; k++) {
    if (y + k > rows.length - 1) {
      return false;
    }
    if (rows[y + k][x] !== needle[k]) {
      return false;
    }
  }
  return true;
}

function checkDiagonalDown(x, y, needle, rows) {
  for (let k = 0; k < needle.length; k++) {
    if (y + k > rows.length - 1 || x + k > rows[y].length - 1) {
      return false;
    }
    if (rows[y + k][x + k] !== needle[k]) {
      return false;
    }
  }
  return true;
}

function checkDiagonalUp(x, y, needle, rows) {
  for (let k = 0; k < needle.length; k++) {
    if (y - k < 0 || x + k > rows[y].length - 1) {
      return false;
    }
    if (rows[y - k][x + k] !== needle[k]) {
      return false;
    }
  }
  return true;
}
