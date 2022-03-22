// 本地测试API
const devBaseURL = 'http://localhost:4000';
const proBaseURL = 'http://localhost:4000';
// const devBaseURL = 'http://hudd.xyz:4000';
// const proBaseURL = 'http://hudd.xyz:4000';

export const BASE_URL =
    process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 8000;
