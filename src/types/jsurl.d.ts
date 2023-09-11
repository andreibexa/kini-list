declare module 'jsurl' {
  export function stringify(input: unknown): string;
  export function parse(input?: null | string): null | undefined;
}
