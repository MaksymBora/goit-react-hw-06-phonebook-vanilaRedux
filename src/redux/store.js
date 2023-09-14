import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsReducer } from './contactsSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: '',
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
