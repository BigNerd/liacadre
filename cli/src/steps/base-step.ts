import { StepContext } from '../types.js';

export abstract class BaseStep {
  abstract name: string;

  async execute(context: StepContext): Promise<void> {
    await this.run(context);
  }

  protected abstract run(context: StepContext): Promise<void>;
}