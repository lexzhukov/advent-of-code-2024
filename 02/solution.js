// https://adventofcode.com/2024/day/2

export function part1(input) {
  const reports = input
    .split('\n')
    .map((line) => line.split(/\s+/))
    .map((levels) => levels.map((l) => Number(l)));
  let safeReports = 0;
  for (let i = 0; i < reports.length; i++) {
    const report = reports[i];
    let isIncreasing = null;
    let isReportSafe = false;
    for (let j = 1; j < report.length; j++) {
      const prev = report[j - 1];
      const cur = report[j];
      if (prev === cur) {
        break;
      }
      if (isIncreasing === null) {
        isIncreasing = prev < cur;
      }
      if (isIncreasing) {
        if (prev > cur) {
          break;
        }
        if (cur - prev > 3) {
          break;
        }
      } else {
        if (prev < cur) {
          break;
        }
        if (prev - cur > 3) {
          break;
        }
      }
      if (j === report.length - 1) {
        isReportSafe = true;
      }
    }
    if (isReportSafe) {
      safeReports++;
    }
  }
  return safeReports;
}
