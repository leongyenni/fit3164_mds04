import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import stockDataReducer from './stockDataSlice';
import timeRangeReducer from './timeRangeSlice';
import forecastDataReducer from './forecastDataSlice';
import chartReducer from './chartSlice';

const makeStore = () =>
    configureStore({
        reducer: {
            timeRangeData: timeRangeReducer,
            stockData: stockDataReducer,
            forecastData: forecastDataReducer,
            chartState: chartReducer
        }
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(makeStore);
