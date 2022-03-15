import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from '../pages/recommend/store';
import { reducer as playerReducer } from '../pages/player/store';

// 多个reducer合并
const cReducer = combineReducers({
    recommend: recommendReducer,
    player: playerReducer,
});

export default cReducer;
