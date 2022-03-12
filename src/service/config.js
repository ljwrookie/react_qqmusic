// 本地测试API
const devBaseURL = 'http://118.195.175.41:3300';
const proBaseURL = 'http://118.195.175.41:3300';

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 8000;
