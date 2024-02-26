import React, { ReactNode } from 'react';

declare global {
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
  /**
   * 自定义的FC，给FC添加children类型
   */
  declare type FC<P extends RecordAnyOrNever = RecordNever> = React.FunctionComponent<
    P & { children: ReactNode }
  >;
}
