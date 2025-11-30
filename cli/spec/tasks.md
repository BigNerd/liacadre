# CLI Implementation Tasks

## Testing Requirement

**Each step must be complemented with a corresponding test that runs successfully before the step is considered complete.**

### Project Configuration Step
**Prerequisites:** None (first step)
**Actions:** Prompt for project name, display title, target directory with validation
**Deliverables:** Project configuration stored in context (name, title, directory)
- [x] Create `ProjectConfigStep` class
- [x] Prompt for project name with validation (lowercase, no spaces)
- [x] Generate display title from project name
- [x] Prompt for target directory with default path

### Node.js Version Check Step
**Prerequisites:** None
**Actions:** Execute `node --version`, verify >=18.0.0
**Deliverables:** Node.js version validation, early exit if version insufficient
- [x] Create `NodeVersionStep` class
- [x] Execute `node --version` command
- [x] Parse and validate version >=18.0.0

### Git Installation Check Step
**Prerequisites:** None
**Actions:** Execute `git --version`, verify command exists
**Deliverables:** Git installation validation, early exit if not installed
- [ ] Create `GitInstallationStep` class
- [ ] Execute `git --version` command
- [ ] Verify Git executable is available

### Git Configuration Check Step
**Prerequisites:** Git installed
**Actions:** Check `git config user.name` and `git config user.email` are set
**Deliverables:** Git user configuration validation, prompt to configure if missing
- [ ] Create `GitConfigStep` class
- [ ] Check `git config user.name` is set
- [ ] Check `git config user.email` is set
- [ ] Prompt user to configure if missing

### System Requirements Check Step
**Prerequisites:** Project config (target directory determined)
**Actions:** Verify write permissions to target directory, check available disk space (>500MB)
**Deliverables:** System requirements validation, early exit if insufficient
- [ ] Create `SystemRequirementsStep` class
- [ ] Check target directory write permissions
- [ ] Verify minimum 500MB available disk space

### Supabase Setup Step
**Prerequisites:** Valid system requirements
**Actions:** Guide Supabase project creation, collect URL/anon key, validate credentials via API test
**Deliverables:** Validated Supabase credentials stored in context
- [ ] Create `SupabaseSetupStep` class
- [ ] Guide user through Supabase project creation
- [ ] Prompt for Supabase URL and anon key
- [ ] Validate Supabase credentials

### Expo Project Creation Step
**Prerequisites:** Project config (name, directory)
**Actions:** Create directory, execute `npx create-expo-app --template typescript`, verify project structure
**Deliverables:** Functional Expo TypeScript project in specified directory
- [ ] Create `ExpoProjectStep` class
- [ ] Execute `npx create-expo-app` with TypeScript template
- [ ] Handle directory creation and navigation
- [ ] Verify Expo project structure

### Dependencies Installation Step
**Prerequisites:** Expo project created, package manager available
**Actions:** Detect npm/yarn, install @supabase/supabase-js and other required packages
**Deliverables:** Updated package.json with all dependencies installed
- [ ] Create `DependenciesStep` class
- [ ] Install Supabase client (`@supabase/supabase-js`)
- [ ] Install additional required packages
- [ ] Handle npm/yarn detection and installation

### Configuration Files Step
**Prerequisites:** Expo project exists, Supabase credentials available
**Actions:** Generate .env with Supabase config, create lib/supabase.ts, add schema template
**Deliverables:** Complete project configuration files ready for development
- [ ] Create `ConfigurationStep` class
- [ ] Generate `.env` file with Supabase credentials
- [ ] Create Supabase configuration file
- [ ] Generate database schema template
- [ ] Create liacadre-specific config files

### Git Repository Step
**Prerequisites:** Project files created, Git available
**Actions:** Initialize git repo, setup .gitignore, stage all files, create initial commit
**Deliverables:** Local Git repository with initial commit
- [ ] Create `GitInitStep` class
- [ ] Initialize Git repository
- [ ] Create initial commit
- [ ] Set up .gitignore appropriately

### GitHub Repository Step (Optional)
**Prerequisites:** Local Git repo, GitHub CLI or credentials
**Actions:** Prompt user choice, create GitHub repo via CLI/API, add remote, push initial commit
**Deliverables:** GitHub repository with project code pushed
- [ ] Create `GitHubRepoStep` class
- [ ] Prompt for GitHub repository creation
- [ ] Use GitHub CLI or API to create remote repository
- [ ] Push initial commit to GitHub

### Project Structure Enhancement
**Prerequisites:** Basic step framework exists
**Actions:** Extend types for all configs, add error handling, implement step dependencies
**Deliverables:** Robust CLI framework with proper error handling and validation
- [ ] Update `types.ts` to include all configuration options
- [ ] Add error handling and rollback mechanisms
- [ ] Implement step validation and dependencies

### Templates Integration
**Prerequisites:** Project created, templates directory exists
**Actions:** Copy template files, replace placeholders with project values, integrate with project structure
**Deliverables:** Customized project files from templates
- [ ] Create template copying functionality
- [ ] Integrate with existing `/templates` directory
- [ ] Customize templates with project-specific values

### Enhanced Next Steps Display
**Prerequisites:** All setup steps completed
**Actions:** Display comprehensive success message, provide verification steps, include troubleshooting links
**Deliverables:** Clear guidance for user's next development steps
- [ ] Update final success message
- [ ] Provide comprehensive setup verification
- [ ] Include troubleshooting guidance

