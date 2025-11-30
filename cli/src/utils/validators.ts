export class Validators {
  static projectName(name: string): boolean {
    return /^[a-z0-9-]+$/.test(name);
  }

  static url(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  static nonEmpty(value: string): boolean {
    return value.trim().length > 0;
  }
}