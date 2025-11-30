import inquirer from 'inquirer';
import { BaseStep } from './base-step.js';
import { StepContext } from '../types.js';
import { Logger } from '../utils/logger.js';
import { Validators } from '../utils/validators.js';
import { join } from 'path';

export class ProjectConfigStep extends BaseStep {
  name = 'Project Configuration';

  protected async run(context: StepContext): Promise<void> {
    Logger.step(this.name);

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter project name (lowercase, no spaces):',
        default: context.config.name || 'my-app',
        validate: (input: string) => {
          if (!Validators.projectName(input)) {
            return 'Project name must be lowercase letters, numbers, and hyphens only';
          }
          return true;
        }
      },
      {
        type: 'input',
        name: 'title',
        message: 'Enter project display title:',
        default: (answers: any) => answers.name.split('-').map((word: string) => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')
      },
      {
        type: 'input',
        name: 'directory',
        message: 'Enter project directory:',
        default: (answers: any) => process.env.LIACADRE_TEST_DIR || join(process.cwd(), answers.name)
      }
    ]);

    context.config.name = answers.name;
    context.config.title = answers.title;
    context.config.directory = answers.directory;
  }
}