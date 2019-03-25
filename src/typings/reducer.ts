import { NewGlobalState } from '../global-state-manager';

/*
export interface Dispatcher<
  GS extends {},
  A extends any[] = any[],
> {
  (...args: A): Promise<GS>;
}
*/

export interface Dispatcher<
  R extends Reducer<any, any>,
> extends CallableFunction {
  (...args: ExtractA<R>): Promise<ExtractGS<R>>;
}

export type Dispatchers<GS, R extends Reducers<GS>> = {
  [name in keyof R]: Dispatcher<R[name]>;
};

type ExtractA<R> = R extends Reducer<infer _GS, infer A> ? A : never;

type ExtractGS<R> = R extends Reducer<infer GS, infer _A> ? GS : never;

export default interface Reducer<
  GS extends {} = {},
  A extends any[] = any[],
> extends CallableFunction {
  (globalState: GS, ...args: A): NewGlobalState<GS>;
};

interface Reducers<GS extends {} = {}> {
  [name: string]: Reducer<GS>;
};