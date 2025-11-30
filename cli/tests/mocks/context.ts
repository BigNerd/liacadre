import { StepContext, ProjectConfig } from '../../src/types.js';

export function createMockContext(overrides: Partial<ProjectConfig> = {}): StepContext {
  return {
    config: {
      name: 'test-app',
      title: 'Test App',
      directory: '/tmp/test-projects',
      ...overrides
    }
  };
}

export function createEmptyContext(): StepContext {
  return {
    config: {}
  };
}