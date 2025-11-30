import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ProjectConfigStep } from '../../src/steps/project-config-step.js';
import { createEmptyContext } from '../mocks/context.js';

const mockPrompt = vi.fn();
vi.mock('inquirer', () => ({
  default: {
    prompt: vi.fn()
  }
}));

// Get the mocked inquirer to access the prompt function
import inquirer from 'inquirer';
const mockedInquirer = vi.mocked(inquirer);

describe('ProjectConfigStep', () => {
  let step: ProjectConfigStep;

  beforeEach(() => {
    step = new ProjectConfigStep();
    vi.clearAllMocks();
  });

  it('should prompt for project configuration and store in context', async () => {
    const context = createEmptyContext();
    
    mockedInquirer.prompt.mockResolvedValue({
      name: 'my-test-app',
      title: 'My Test App',
      directory: '/home/user/projects/my-test-app'
    });

    await step.execute(context);

    expect(mockedInquirer.prompt).toHaveBeenCalledWith([
      expect.objectContaining({
        name: 'name',
        message: 'Enter project name (lowercase, no spaces):',
        default: 'my-app'
      }),
      expect.objectContaining({
        name: 'title',
        message: 'Enter project display title:'
      }),
      expect.objectContaining({
        name: 'directory',
        message: 'Enter project directory:'
      })
    ]);

    expect(context.config.name).toBe('my-test-app');
    expect(context.config.title).toBe('My Test App');
    expect(context.config.directory).toBe('/home/user/projects/my-test-app');
  });

  it('should use provided project name as default', async () => {
    const context = createEmptyContext();
    context.config.name = 'existing-app';
    
    mockedInquirer.prompt.mockResolvedValue({
      name: 'existing-app',
      title: 'Existing App',
      directory: '/home/user/projects/existing-app'
    });

    await step.execute(context);

    expect(mockedInquirer.prompt).toHaveBeenCalledWith([
      expect.objectContaining({
        name: 'name',
        default: 'existing-app'
      }),
      expect.anything(),
      expect.anything()
    ]);
  });
});