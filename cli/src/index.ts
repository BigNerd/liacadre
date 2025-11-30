#!/usr/bin/env node

import { Command } from 'commander';
import { CreateCommand } from './commands/create.js';
import chalk from 'chalk';

const program = new Command();

program
  .name('liacadre')
  .description('Liacadre project generator - Expo + Supabase setup tool')
  .version('0.1.0');

program
  .command('create')
  .description('Create a new Liacadre project')
  .argument('[name]', 'Project name')
  .action(async (name?: string) => {
    try {
      const createCommand = new CreateCommand();
      await createCommand.run(name);
    } catch (error) {
      console.error(chalk.red('❌ Error:'), error instanceof Error ? error.message : error);
      process.exit(1);
    }
  });

program.parse();