import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCounter = createFeatureSelector<number>('counter');

export const getCounterValue = createSelector(
  selectCounter,
  (state) => state
);
