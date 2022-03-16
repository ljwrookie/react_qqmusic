import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from '../pages/recommend/store';
import { reducer as playerReducer } from '../pages/player/store';
import { reducer  as loginReducer} from '../pages/login/store';
import { reducer  as mvReducer} from '../pages/mv/store';

// 多个reducer合并
const cReducer = combineReducers({
    recommend: recommendReducer,
    player: playerReducer,
    login: loginReducer,
    mv: mvReducer
});

export default cReducer;
