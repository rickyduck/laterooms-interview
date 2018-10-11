import { cloneableGenerator } from 'redux-saga/utils';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import mockHotels from '../../../__mocks__/hotels';

import { apiBaseEndpoint } from '../config/api';
import { fetchHotelsStarted, fetchHotelsSucceeded } from './actions';
import { fetchHotels } from './sagas';
const hotelsUrl = `${apiBaseEndpoint}/hotels`;

describe('Test fetchHotels saga', () => {
  const generator = cloneableGenerator(fetchHotels)();
  it('should put fetchHotelsStarted', () => {
    expect(generator.next().value).toEqual(put(fetchHotelsStarted()));
  });

  it('should call the api with the property id', () => {
    expect(JSON.stringify(generator.next().value)).toEqual(
      JSON.stringify(call(axios.get, hotelsUrl))
    );
  });

  it('should put fetchHotelsSuccess and finish', () => {
    const clone = generator.clone();
    expect(clone.next().value).toEqual(
      put(
        fetchHotelsSucceeded(mockHotels, {
          facilities: ['car park', 'pool', 'gym']
        })
      )
    );
    expect(clone.next().done).toEqual(true);
  });
});
