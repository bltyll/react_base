declare module '*.jpeg' {
  const ref: string;
  export default ref;
}
declare module '*.m.css' {
  const style: { [key: string]: string };
  export default style;
}
declare type RecordAny = Record<string, any>;
declare type RecordNever = Record<never, never>;
declare type RecordAnyOrNever = RecordAny | RecordNever;
declare type RecordScalable<T extends RecordAny, U extends RecordAnyOrNever> = T &
  (U extends Record<string, never> ? RecordNever : U);
