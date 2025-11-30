import { describe, it, expect, beforeEach, vi } from 'vitest';
import { NodeVersionStep } from '../../src/steps/node-version-step.js';
import { createEmptyContext } from '../mocks/context.js';
import { exec } from 'child_process';

vi.mock('child_process', () => ({
  exec: vi.fn()
}));

const mockedExec = vi.mocked(exec);

describe('NodeVersionStep', () => {
  let step: NodeVersionStep;

  beforeEach(() => {
    step = new NodeVersionStep();
    vi.clearAllMocks();
  });

  it('should pass with Node.js version 18.0.0', async () => {
    const context = createEmptyContext();
    
    mockedExec.mockImplementation((cmd, callback: any) => {
      callback(null, { stdout: 'v18.0.0\n', stderr: '' });
      return {} as any;
    });

    await expect(step.execute(context)).resolves.toBeUndefined();
  });

  it('should pass with Node.js version 20.0.0', async () => {
    const context = createEmptyContext();
    
    mockedExec.mockImplementation((cmd, callback: any) => {
      callback(null, { stdout: 'v20.0.0\n', stderr: '' });
      return {} as any;
    });

    await expect(step.execute(context)).resolves.toBeUndefined();
  });

  it('should fail with Node.js version 16.0.0', async () => {
    const context = createEmptyContext();
    
    mockedExec.mockImplementation((cmd, callback: any) => {
      callback(null, { stdout: 'v16.0.0\n', stderr: '' });
      return {} as any;
    });

    await expect(step.execute(context)).rejects.toThrow('Node.js version 16.0.0 is insufficient');
  });

  it('should fail with Node.js version 17.9.9', async () => {
    const context = createEmptyContext();
    
    mockedExec.mockImplementation((cmd, callback: any) => {
      callback(null, { stdout: 'v17.9.9\n', stderr: '' });
      return {} as any;
    });

    await expect(step.execute(context)).rejects.toThrow('Node.js version 17.9.9 is insufficient');
  });
});
