import React from 'react';
import { ReactNComponent, ReactNPureComponent } from './components';
import { ReactNProvider } from './create-provider';
import reactn from './decorator';
import { NewGlobalState } from './global-state-manager';
import Callback from './typings/callback';
import Reducer, { Dispatcher, ExtractA, Reducers } from './typings/reducer';
import { GlobalTuple, StateTuple, UseGlobal } from './use-global';
import { Getter, Setter, WithGlobal } from './with-global';




type BooleanFunction = () => boolean;

interface ReactN extends TypeOfReact {
  <P extends {} = {}, S extends {} = {}, GS extends {} = {}, R extends {} = {}, SS = any>(
    DecoratedComponent: React.ComponentClass<P, S>,
  ): ReactNTypes.ComponentClass<P, S, GS, R, SS>;

  addCallback<GS extends {} = {}>(
    callback: Callback<GS>,
  ): BooleanFunction;

  addReducer<GS extends {} = {}>(
    name: string,
    reducer: Reducer<GS>,
  ): BooleanFunction;

  addReducers<GS extends {} = {}>(
    reducers: Reducers<GS>,
  ): BooleanFunction;

  Component: typeof ReactNComponent

  createProvider<GS extends {} = {}, R extends {} = {}>(
    initialState?: GS,
    initialReducers?: R,
  ): ReactNProvider<GS, R>;

  default: ReactN;

  getGlobal<GS extends {} = {}>(): GS;

  PureComponent: typeof ReactNPureComponent;

  removeCallback<GS extends {} = {}>(
    callback: Callback<GS>,
  ): boolean;

  resetGlobal(): void;

  setGlobal<GS extends {} = {}>(
    newGlobalState: NewGlobalState<GS>,
    callback?: Callback<GS>,
  ): Promise<GS>;

  useGlobal<GS extends {} = {}>(): GlobalTuple<GS>;

  useGlobal<GS extends {}, Property extends keyof GS>(
    property: Property,
  ): StateTuple<GS, Property>;

  useGlobalReducer<GS extends {} = {}, A extends any[] = any[]>(
    reducer: Reducer<GS, A>,
  ): Dispatcher<GS, A>;

  useGlobalReducer<GS extends {} = {}, R extends {} = {}, K extends keyof R = keyof R>(
    reducer: K,
  ): Dispatcher<GS, ExtractA<R[K]>>;

  withGlobal<GS extends {} = {}, HP extends {} = {}, LP extends {} = {}>(
    getter?: Getter<GS, HP, LP>,
    setter?: Setter<GS, HP, LP>,
  ): WithGlobal<HP, LP>;
}

declare namespace ReactNTypes {

  interface ComponentClass<
    P extends {} = {},
    S extends {} = {},
    GS extends {} = {},
    R extends {} = {},
    SS = any
  > extends React.ComponentClass<P, S> {
    new (props: P, context?: any): ReactNComponent<P, S, GS, R, SS>;
  }
  class ComponentClass { }

}

type TypeOfReact = typeof React;



declare const _export: ReactN & typeof ReactNTypes;
export = _export;