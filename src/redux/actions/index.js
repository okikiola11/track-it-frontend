const USER_DATA = 'USER_DATA';
const MEASURE_DATA = 'MEASURE_DATA';

const userData = (data) => ({
  type: USER_DATA,
  payload: data,
});

export { USER_DATA, userData };

const measureData = (data) => ({
  type: MEASURE_DATA,
  payload: data,
});

export { MEASURE_DATA, measureData };
