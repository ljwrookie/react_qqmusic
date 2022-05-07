import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from '../pages/recommend/store';
import { reducer as playerReducer } from '../pages/player/store';
import { reducer as playlistReducer } from '../pages/playlist/store';
import { reducer as userReducer } from '../pages/user/store';
import { reducer as mvReducer } from '../pages/mv/store';
import { reducer as searchReducer } from '../pages/search/store';
import { reducer as mvPlayReducer } from '../pages/mv-player/store';
import { reducer as artistReducer } from '../pages/artist/store';
import { reducer as discoverReducer } from '../pages/discover/store';
// 多个reducer合并
const cReducer = combineReducers({
    recommend: recommendReducer,
    player: playerReducer,
    playlist: playlistReducer,
    user: userReducer,
    mv: mvReducer,
    search: searchReducer,
    mvPlayer: mvPlayReducer,
    artist: artistReducer,
    discover: discoverReducer,
});

export default cReducer;
