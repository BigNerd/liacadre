import chalk from 'chalk';

export class Logger {
  static step(message: string): void {
    console.log(chalk.blue(`\n🚀 ${message}`));
  }

  static success(message: string): void {
    console.log(chalk.green(`✅ ${message}`));
  }

  static warning(message: string): void {
    console.log(chalk.yellow(`⚠️  ${message}`));
  }

  static error(message: string): void {
    console.log(chalk.red(`❌ ${message}`));
  }

  static info(message: string): void {
    console.log(chalk.cyan(`ℹ️  ${message}`));
  }
}