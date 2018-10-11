import { cloneableGenerator } from 'redux-saga/utils';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import { apiBaseEndpoint } from '../config/api';
import { fetchHotelsStarted, fetchHotelsSucceeded } from './actions';
import { fetchHotels } from './sagas';

describe('Test fetchHotels saga', () => {
  const generator = cloneableGenerator(fetchHotels)();
  it('should put fetchHotelsStarted', () => {
    expect(generator.next('/api/').value).toEqual(put(fetchHotelsStarted()));
  });

  it('should call the api with the property id', () => {
    expect(JSON.stringify(generator.next().value)).toEqual(
      JSON.stringify(call(axios.get, apiBaseEndpoint + '/hotels'))
    );
  });

  it('should put fetchHotelsSuccess and finish', () => {
    const clone = generator.clone();
    expect(clone.next(true).value).toEqual(
      put(fetchHotelsSucceeded(undefined))
    );
    expect(clone.next().done).toEqual(true);
  });
});
