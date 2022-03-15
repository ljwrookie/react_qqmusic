import request from "./request";

export function getSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids,
    },
  });
}

export function getLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id,
    },
  });
}

// /comment/hot?type=0&id=167876
export function getHotComment(id, type = 0) {
  return request({
    url: "/comment/hot",
    params: {
      id,
      type,
    },
  });
}

// 歌曲评论
export function getSongComment(id, limit = 20, offset) {
  return request({
    url: "/comment/music",
    params: {
      id,
      limit,
      offset,
      timestamp: new Date().getTime(),
    },
  });
}

// 评论歌曲
export function sendSongComment(id, content, cookie) {
  return request({
    url: "/comment",
    method: "get",
    params: {
      t: 1, // 发送
      type: 0, // 歌曲类型
      id,
      content: content,
      cookie: cookie,
      timestamp: new Date().getTime(),
    },
  });
}

// 相似歌曲
export function getSimilarSong(id) {
  return request({
    url: "/simi/song",
    params: {
      id,
    },
  });
}

// 最近听了这首歌的五个人
export function getSimilarUser(id, cookie) {
  return request({
    url: "/simi/user",
    params: {
      id,
      cookie,
    },
  });
}

// 包含这首歌的歌单
export function getSimilarAlbum(id) {
  return request({
    url: "/simi/playlist",
    params: {
      id,
    },
  });
}
