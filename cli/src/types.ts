export interface ProjectConfig {
  name: string;
  title: string;
  directory: string;
  github?: {
    username: string;
    createRepo: boolean;
  };
  supabase: {
    url: string;
    anonKey: string;
  };
}

export interface StepContext {
  config: Partial<ProjectConfig>;
  projectPath?: string;
}