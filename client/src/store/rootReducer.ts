import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import darkModeReducer from './darkMode/reducer';
import dialogIsOpenReducer from './dialog/reducer';
import { Restaurant } from './restaurants/types';
import restaurantsReducer from './restaurants/reducer';

export interface State {
  darkMode: boolean;
  dialogIsOpen: boolean;
  restaurants: Restaurant[];
}

export const initialState: State = {
  darkMode: false,
  dialogIsOpen: false,
  restaurants: [],
};

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  dialogIsOpen: dialogIsOpenReducer,
  restaurants: restaurantsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
