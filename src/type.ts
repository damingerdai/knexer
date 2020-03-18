export type PartialWithArray<T> = {
    [P in keyof T]?: T[P] | T[P][];
};