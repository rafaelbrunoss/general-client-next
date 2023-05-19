import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import type { AnyAction, EmptyObject, Store } from 'redux';

import { notificationReducer, INotificationState } from './notification';

export type RootStateName = 'notification';

export type RootState = INotificationState;

export interface IRootReducerProps {
  notification: INotificationState;
}

export const createAppStore = (): Store<
  EmptyObject & IRootReducerProps,
  AnyAction
> =>
  configureStore({
    reducer: combineReducers<IRootReducerProps>({
      notification: notificationReducer,
    }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

/**
 * It still needs some improvements in order to Redux work with Next.js
 */
