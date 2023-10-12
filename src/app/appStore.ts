import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { selectApi } from '../widgets';

export const rootReducer = combineReducers({
  [selectApi.reducerPath]: selectApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(selectApi.middleware),
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
