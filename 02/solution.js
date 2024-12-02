// https://adventofcode.com/2024/day/2

export function part1(input) {
  const reports = input
    .split('\n')
    .map((line) => line.split(/\s+/))
    .map((levels) => levels.map((l) => Number(l)));
  const safeReports = reports.filter((r) => isReportSafe(r));
  return safeReports.length;
}

export function part2(input) {
  const reports = input
    .split('\n')
    .map((line) => line.split(/\s+/))
    .map((levels) => levels.map((l) => Number(l)));
  const safeReports = reports.filter(
    (r) => isReportSafe(r) || isDampenedReportSafe(r),
  );
  return safeReports.length;
}

function isReportSafe(report) {
  const direction = report[0] - report[1] > 0 ? -1 : 1;
  for (let i = 1; i < report.length; i++) {
    const prev = report[i - 1];
    const cur = report[i];
    const diff = (prev - cur) * -direction;
    if (diff < 1 || diff > 3) return false;
  }
  return true;
}

function isDampenedReportSafe(report) {
  return report.map((_, i) => report.toSpliced(i, 1)).some(isReportSafe);
}
