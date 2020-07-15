import { applyMiddleware, createStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, Persistor } from 'redux-persist';

import { State, persistedReducer } from './rootReducer';

const configureStore = (initialState: State): { store: Store; persistor: Persistor } => {
  const middleWares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middleWares);
  const composedEnhancer = composeWithDevTools(middlewareEnhancer);

  const store = createStore(persistedReducer, initialState, composedEnhancer);
  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
