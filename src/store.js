import { createStore, combineReducers } from 'redux';

// actions
const displaySoundAction = soundTitle => {
  return {
    type: 'SOUND_DISPLAY',
    payload: soundTitle
  };
};

// reducers
const soundDisplayReducer = (state = null, action) => {
  switch (action.type) {
    case 'SOUND_DISPLAY':
      return action.payload;
    default:
      return state;
  }
};

// store
const allReducers = combineReducers({
  soundDisplay: soundDisplayReducer
});

const store = createStore(allReducers);

export { store, displaySoundAction };
