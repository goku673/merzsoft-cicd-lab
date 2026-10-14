import { describe, expect, it } from 'vitest';
import { isValidBranchName } from './branch-name';

describe('Convenciones de ramas MerzSoft', () => {
  it('acepta una rama feature válida', () => {
    expect(isValidBranchName('feature/ms-001-login')).toBe(true);
  });

  it('rechaza una rama sin identificador', () => {
    expect(isValidBranchName('feature/login')).toBe(false);
  });

  it('rechaza ramas no autorizadas', () => {
    expect(isValidBranchName('mis-cambios')).toBe(false);
  });

  it('acepta una rama chore válida', () => {
    expect(isValidBranchName('chore/ms-001-local-tooling')).toBe(true);
  });
});
