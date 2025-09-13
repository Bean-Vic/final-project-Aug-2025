import React from 'react';
import { Provider } from 'react-redux';
import store from './rick-and-morty-store';
import { RickAndMorty } from './components/rick-and-morty';


export const RickAndMortyReduxContainer = () => {
    return (
      <Provider store={store}>
          <RickAndMorty />
      </Provider>
    );
};

