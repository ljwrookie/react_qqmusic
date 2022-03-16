import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from '../pages/recommend/store';
import { reducer as playerReducer } from '../pages/player/store';
import { reducer  as loginReducer} from '../pages/login/store';

// 多个reducer合并
const cReducer = combineReducers({
    recommend: recommendReducer,
    player: playerReducer,
    login: loginReducer,
});

export default cReducer;
