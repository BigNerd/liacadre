# Liacadre CLI

A TypeScript CLI tool for creating Expo + Supabase projects with the Liacadre architecture.

## Usage

```bash
# Create a new project
npx @liacadre/cli create

# Create with a specific name
npx @liacadre/cli create my-project
```

## Development Setup

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Test the built version
npm start create my-test-project
```

## Project Structure

```
cli/
├── src/
│   ├── commands/          # CLI commands
│   │   └── create.ts      # Main create command
│   ├── steps/             # Modular setup steps
│   │   ├── base-step.ts   # Base step class
│   │   └── project-config-step.ts
│   ├── utils/             # Utility functions
│   │   ├── logger.ts      # Colored logging
│   │   └── validators.ts  # Input validation
│   ├── templates/         # File templates
│   ├── types.ts           # TypeScript interfaces
│   └── index.ts           # CLI entry point
├── tests/
│   ├── steps/             # Step tests
│   ├── mocks/             # Mock factories
│   └── utils/             # Test utilities
├── spec/                  # Task specifications
├── dist/                  # Compiled JavaScript
├── jest.config.js         # Test configuration
├── package.json
└── tsconfig.json
```

## Testing

### Running Tests
```bash
# Run all tests
npm test

# Run specific test
npm test project-config-step

# Run tests in watch mode
npm test -- --watch
```

### Test Structure
- **Mock factories** (`tests/mocks/`) - Create test contexts and mock dependencies
- **Step tests** (`tests/steps/`) - Test each step in isolation
- **Utilities** (`tests/utils/`) - Test helper functions

### Writing Tests
Each step should have corresponding tests that:
- Mock external dependencies (commands, file system, prompts)
- Test success and error scenarios
- Verify context state changes

Example test pattern:
```typescript
import { MyStep } from '../../src/steps/my-step.js';
import { createMockContext } from '../mocks/context.js';

describe('MyStep', () => {
  it('should execute successfully', async () => {
    const context = createMockContext();
    const step = new MyStep();
    
    await step.execute(context);
    
    expect(context.config).toEqual(expectedResult);
  });
});
```

## Adding New Steps

1. Create a new step class extending `BaseStep`
2. Implement the `run` method
3. Add it to the steps array in `create.ts`
4. Write tests for the new step

Example:
```typescript
export class MyStep extends BaseStep {
  name = 'My Step';
  
  protected async run(context: StepContext): Promise<void> {
    Logger.step(this.name);
    // Your step logic here
  }
}
```

## Architecture

- **TypeScript** for type safety and better development experience
- **Commander.js** for CLI argument parsing
- **Inquirer.js** for interactive prompts
- **Chalk** for colored terminal output
- **Jest** for testing with TypeScript support
- **Modular steps** for maintainable and testable code