export type GenericObj<T> = {
  [P in keyof T]?: T[P];
};
