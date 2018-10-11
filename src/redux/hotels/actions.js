export const FETCH_HOTELS_REQUESTED = 'FETCH_HOTELS_REQUESTED';
export const FETCH_HOTELS_STARTED = 'FETCH_HOTELS_STARTED';
export const FETCH_HOTELS_SUCCEEDED = 'FETCH_HOTELS_SUCCEEDED';
export const FETCH_HOTELS_FAILED = 'FETCH_HOTELS_FAILED';

export const fetchHotelsRequested = () => ({
  type: FETCH_HOTELS_REQUESTED
});

export const fetchHotelsStarted = () => ({
  type: FETCH_HOTELS_STARTED
});

export const fetchHotelsSucceeded = (response, filters) => ({
  type: FETCH_HOTELS_SUCCEEDED,
  data: {
    response,
    filters
  }
});

export const fetchHotelsFailed = error => ({
  type: FETCH_HOTELS_FAILED,
  data: {
    error
  }
});
