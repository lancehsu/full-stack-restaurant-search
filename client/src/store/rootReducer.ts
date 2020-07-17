import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import darkModeReducer from './darkMode/reducer';
import dialogIsOpenReducer from './dialog/reducer';
import { Restaurant } from './restaurants/types';
import restaurantsReducer from './restaurants/reducer';
import favoritesReducer from './favorites/reducer';
import { Favorite } from './favorites/types';

export interface State {
  darkMode: boolean;
  dialogIsOpen: boolean;
  restaurants: Restaurant[];
  favorites: Favorite[];
}

export const initialState: State = {
  darkMode: false,
  dialogIsOpen: false,
  restaurants: [],
  favorites: [],
};

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  dialogIsOpen: dialogIsOpenReducer,
  restaurants: restaurantsReducer,
  favorites: favoritesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
