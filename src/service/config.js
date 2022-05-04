// 本地测试API
const devBaseURL = 'http://localhost:3000';
const proBaseURL = 'http://localhost:3000';
// const devBaseURL = 'http://47.108.191.181:3000';
// const proBaseURL = 'http://47.108.191.181:3000';
// const devBaseURL = 'http://hqldd.space:3000';
// const proBaseURL = 'http://hqldd.space:3000';
// const devBaseURL = 'http://music.codevi.space:3000';
// const proBaseURL = 'http://music.codevi.space:3000';

export const BASE_URL =
    process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 8000;
