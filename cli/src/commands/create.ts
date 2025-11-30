import chalk from 'chalk';
import { StepContext } from '../types.js';
import { Logger } from '../utils/logger.js';
import { ProjectConfigStep } from '../steps/project-config-step.js';
import { NodeVersionStep } from '../steps/node-version-step.js';

export class CreateCommand {
  async run(projectName?: string): Promise<void> {
    // Display banner
    console.clear();
    console.log(chalk.green(`
╔══════════════════════════════════════╗
║        🚀 LIACADRE SETUP 🚀          ║
║   Expo + Supabase Project Creator    ║
╚══════════════════════════════════════╝
    `));

    const context: StepContext = {
      config: {
        name: projectName
      }
    };

    // Execute steps
    const steps = [
      new NodeVersionStep(),
      new ProjectConfigStep(),
      // More steps will be added here
    ];

    try {
      for (const step of steps) {
        await step.execute(context);
      }

      Logger.success('Setup complete! 🎉');
      this.showNextSteps(context);
    } catch (error) {
      Logger.error(`Setup failed: ${error instanceof Error ? error.message : error}`);
      throw error;
    }
  }

  private showNextSteps(context: StepContext): void {
    console.log(chalk.green(`
╔══════════════════════════════════════╗
║            🎉 SUCCESS! 🎉            ║
╚══════════════════════════════════════╝
    `));

    console.log('Your project is ready! Next steps:\n');
    console.log(`1. 📁 Navigate to your project:`);
    console.log(`   cd ${context.config.directory}/${context.config.name}\n`);
    console.log(`2. 🚀 Start development:`);
    console.log(`   npx expo start\n`);
    console.log(`📚 Documentation: https://docs.expo.dev`);
    console.log(`🔧 Supabase docs: https://supabase.com/docs\n`);
    console.log('Happy coding! 🚀');
  }
}