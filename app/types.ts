export type ValueOf<T extends Record<string, unknown>> = T[keyof T];

export type ArrayElement<
  ArrayType extends readonly unknown[]
> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type IndexSignature<O extends GenericObject> = {
  [P in keyof O]: O[P];
};

export type GenericObject = Record<string, string | number | boolean>;

export type KeysOfType<T, TProp> = {
  [P in keyof T]: T[P] extends TProp ? P : never;
}[keyof T];
