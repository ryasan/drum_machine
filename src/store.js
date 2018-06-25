import { createStore, combineReducers } from 'redux';

// actions
const displaySoundAction = soundTitle => {
  return {
    type: 'SOUND_DISPLAY',
    payload: soundTitle
  };
};

const powerOnAction = powerOn => {
  return {
    type: 'POWER_ON',
    payload: powerOn
  };
};

// reducers
const soundDisplayReducer = (state = 'ON', action) => {
  switch (action.type) {
    case 'SOUND_DISPLAY':
      return action.payload;
    default:
      return state;
  }
};

const powerOnReducer = (state = true, action) => {
  switch (action.type) {
    case 'POWER_ON':
      return action.payload;
    default:
      return state;
  }
};

// store
const allReducers = combineReducers({
  soundDisplay: soundDisplayReducer,
  powerOn: powerOnReducer
});

const store = createStore(allReducers);

export { store, displaySoundAction, powerOnAction };
