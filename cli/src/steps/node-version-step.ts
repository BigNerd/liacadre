import { exec } from 'child_process';
import { promisify } from 'util';
import { BaseStep } from './base-step.js';
import { StepContext } from '../types.js';
import { Logger } from '../utils/logger.js';

const execAsync = promisify(exec);

export class NodeVersionStep extends BaseStep {
  name = 'Node.js Version Check';

  protected async run(context: StepContext): Promise<void> {
    Logger.step(this.name);

    const { stdout } = await execAsync('node --version');
    const version = stdout.trim().replace('v', '');
    const [major] = version.split('.').map(Number);

    if (major < 18) {
      Logger.error(`Node.js version ${version} is not supported. Minimum required: 18.0.0`);
      throw new Error(`Node.js version ${version} is insufficient. Please upgrade to Node.js 18.0.0 or higher.`);
    }

    Logger.success(`Node.js version ${version} detected`);
  }
}
