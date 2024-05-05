export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type ObjectKeys<T> = keyof T;
export type ObjectValues<T> = T[keyof T];
