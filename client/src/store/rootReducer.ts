import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import darkModeReducer from './darkMode/reducer';
import dialogIsOpenReducer from './dialog/reducer';
import { Restaurant } from './restaurants/types';
import restaurantsReducer from './restaurants/reducer';
import favoritesReducer from './favorites/reducer';
import { Favorite } from './favorites/types';
import { Message } from './Message/types';
import messageReducer from './Message/reducer';

export interface State {
  darkMode: boolean;
  message: Message;
  dialogIsOpen: boolean;
  restaurants: Restaurant[];
  favorites: Favorite[];
}

export const initialState: State = {
  darkMode: false,
  dialogIsOpen: false,
  restaurants: [],
  favorites: [],
  message: { open: false, confirmFunction: null, message: '' },
};

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  message: messageReducer,
  dialogIsOpen: dialogIsOpenReducer,
  restaurants: restaurantsReducer,
  favorites: favoritesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
