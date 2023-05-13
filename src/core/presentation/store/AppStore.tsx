import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import type { AnyAction, EmptyObject, Store } from 'redux';

import { notificationReducer, NotificationState } from './notification';

export type RootStateName = 'notification';

export type RootState = NotificationState;

export interface RootReducerProps {
  notification: NotificationState;
}

export const createAppStore = (): Store<EmptyObject & RootReducerProps, AnyAction> =>
  configureStore({
    reducer: combineReducers<RootReducerProps>({
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
