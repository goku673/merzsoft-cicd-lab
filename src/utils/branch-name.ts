const BRANCH_PATTERN =
  /^(feature|bugfix|hotfix|docs|refactor|test|chore|ci|perf)\/ms-[0-9]+-[a-z0-9]+(-[a-z0-9]+)*$/;

export function isValidBranchName(name: string): boolean {
  return BRANCH_PATTERN.test(name);
}
