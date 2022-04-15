declare module 'jsurl' {
  type Nullable<T> = T | null | undefined;
  export function stringify(input: unknown): string;
  export function parse(input?: Nullable<string>): Nullable<T | undefined>;
}
