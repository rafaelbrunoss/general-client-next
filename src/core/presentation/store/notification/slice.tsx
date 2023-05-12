import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { Notification } from '@domain/common/models';
import { Id } from '@domain/common/value-objects';

import {
  initialNotificationState as initialState,
  NotificationState,
} from './state';

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (
      state: NotificationState,
      action: PayloadAction<Notification>,
    ) => {
      const notificationAlreadyExists = state.notifications.find(
        (notification) => notification.content === action.payload.content,
      );

      if (!notificationAlreadyExists) {
        state.notifications.push(action.payload);
      }
    },
    hideNotification: (state: NotificationState, action: PayloadAction<Id>) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id.value !== action.payload.value,
      );
    },
  },
});

export const notificationReducer = notificationSlice.reducer;
export const notificationActions = notificationSlice.actions;
