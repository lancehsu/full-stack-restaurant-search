import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import darkModeReducer from './darkMode/reducer';
import dialogIsOpenReducer from './dialog/reducer';
import { Restaurant } from './restaurants/types';
import restaurantsReducer from './restaurants/reducer';
import favoritesReducer from './favorites/reducer';
import { Favorite } from './favorites/types';
import { Message } from './message/types';
import messageReducer from './message/reducer';
import userReducer from './user/reducer';
import { User } from './user/types';
import inviteKeysReducer from './inviteKey/reducer';

export interface State {
  user: User;
  inviteKeys: string[];
  darkMode: boolean;
  message: Message;
  dialogIsOpen: boolean;
  restaurants: Restaurant[];
  favorites: Favorite[];
}

export const initialState: State = {
  user: null,
  inviteKeys: [],
  darkMode: false,
  message: { open: false, confirmFunction: null, content: '' },
  dialogIsOpen: false,
  restaurants: [],
  favorites: [],
};

const rootReducer = combineReducers({
  user: userReducer,
  darkMode: darkModeReducer,
  message: messageReducer,
  dialogIsOpen: dialogIsOpenReducer,
  restaurants: restaurantsReducer,
  favorites: favoritesReducer,
  inviteKeys: inviteKeysReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['message', 'dialogIsOpen', 'restaurants', 'favorites', 'inviteKeys'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
